[
  {
    "cursor": "UNohNGoP5mVyaHQ2bDQ3YzczZmJvcW4w",
    "service": {
      "autoDeploy": "yes",
      "branch": "main",
      "createdAt": "2025-02-06T16:05:27.936166Z",
      "dashboardUrl": "https://dashboard.render.com/web/srv-cuidrht6l47c73fboqn0",
      "id": "srv-cuidrht6l47c73fboqn0",
      "name": "Server",
      "notifyOnFail": "default",
      "ownerId": "tea-cuh54qrv2p9s73cran1g",
      "repo": "https://github.com/tziviSolo/FullStack",
      "rootDir": "./Server",
      "serviceDetails": {
        "buildPlan": "starter",
        "env": "docker",
        "envSpecificDetails": {
          "dockerCommand": "",
          "dockerContext": ".",
          "dockerfilePath": "./Dockerfile"
        },
        "healthCheckPath": "",
        "maintenanceMode": {
          "enabled": false,
          "uri": ""
        },
        "numInstances": 1,
        "openPorts": null,
        "plan": "free",
        "previews": {
          "generation": "off"
        },
        "pullRequestPreviewsEnabled": "no",
        "region": "oregon",
        "runtime": "docker",
        "sshAddress": "srv-cuidrht6l47c73fboqn0@ssh.oregon.render.com",
        "url": "https://server-rn7d.onrender.com"
      },
      "slug": "server-rn7d",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "web_service",
      "updatedAt": "2025-02-06T18:15:48.352787Z"
    }
  },
  {
    "cursor": "zBUEese1dYVxazl1MGptczczOWRxOTJn",
    "service": {
      "autoDeploy": "yes",
      "branch": "main",
      "createdAt": "2025-02-06T14:55:14.544928Z",
      "dashboardUrl": "https://dashboard.render.com/static/srv-cuicqk9u0jms739dq92g",
      "id": "srv-cuicqk9u0jms739dq92g",
      "name": "Client",
      "notifyOnFail": "default",
      "ownerId": "tea-cuh54qrv2p9s73cran1g",
      "repo": "https://github.com/tziviSolo/FullStack",
      "rootDir": "./Client",
      "serviceDetails": {
        "buildCommand": "npm run build",
        "buildPlan": "starter",
        "previews": {
          "generation": "off"
        },
        "publishPath": "build",
        "pullRequestPreviewsEnabled": "no",
        "url": "https://fullstack-ezbp.onrender.com"
      },
      "slug": "fullstack-ezbp",
      "suspended": "not_suspended",
      "suspenders": [],
      "type": "static_site",
      "updatedAt": "2025-02-08T20:05:22.329766Z"
    }
  }
]