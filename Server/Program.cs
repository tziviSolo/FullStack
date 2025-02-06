using Microsoft.EntityFrameworkCore;
using PractiCode___part_3;


var builder = WebApplication.CreateBuilder(args);

//הזרקה של הדטה לפרויקט
builder.Services.AddScoped<ToDoDbContext>();

//אפשור פניה לכל מי שרוצה לפנות לאפליקציה
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseCors("AllowAll");

//הוספת הסווגר
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty;
    });
}

app.MapGet("/items", async (ToDoDbContext context) =>
{
    var items = await context.Items.ToListAsync();
    return items.Count == 0 ? Results.NotFound() : Results.Ok(items);
});

app.MapPost("/item", async (Item item, ToDoDbContext context) =>
{
    try
    {
        await context.Items.AddAsync(item);
        await context.SaveChangesAsync();
        return Results.Created($"/item/{item.Id}", item);
    }
    catch (Exception ex)
    {
        return Results.Conflict(new { ex.Message });
    }
});

app.MapPut("/item/{id}", async (int id, Item item, ToDoDbContext context) =>
{
    var existingItem = await context.Items.FindAsync(id);
    if (existingItem == null)
    {
        return Results.NotFound();
    }
    existingItem.IsComplete = item.IsComplete;
    await context.SaveChangesAsync();
    return Results.Ok(existingItem);
});

app.MapDelete("/item/{id}", async (int id, ToDoDbContext context) =>
{
    var itemToDelete = await context.Items.FindAsync(id);
    if (itemToDelete == null)
    {
        return Results.NotFound();
    }
    context.Items.Remove(itemToDelete);
    await context.SaveChangesAsync();
    return Results.Ok();
});

app.Run();