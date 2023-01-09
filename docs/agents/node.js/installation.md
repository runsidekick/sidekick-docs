# Installation

First install the node agent by running

```
npm install @runsidekick/sidekick-agent-nodejs
```

There are two way to integrate Sidekick agent to your application.

#### Integrate Agent with Environment Variable

You can easily integrate Sidekick using below environment variables.

* set `SIDEKICK_APIKEY` environment variable with your Sidekick api key.
* set `NODE_OPTIONS` environment variable with `'-r @runsidekick/sidekick-agent-nodejs/dist/bootstrap'`

#### Integrate Agent with Code

You can easily integrate Sidekick adding below code block to top of your project.

JS example

```
const SidekickDebugger = require('@runsidekick/sidekick-agent-nodejs');

SidekickDebugger.start({ 
    apiKey: '<Your_Api_Key>'
});

...
```

TS example

```
import * as SidekickDebugger from '@runsidekick/sidekick-agent-nodejs';

SidekickDebugger.start({ 
    apiKey: '<Your_Api_Key>'
});

...
```

note: You also need to define brokerHost & brokerPort parameters if you are using On-prem or a  self-hosted version.

### Configs

| Config                            | Requirement | Environment Variable                               | Default                 |
| --------------------------------- | ----------- | -------------------------------------------------- | ----------------------- |
| apiKey                            | Required    | SIDEKICK\_APIKEY                                   | None                    |
| logLevel                          | Optional    | SIDEKICK\_AGENT\_LOG\_LEVEL                        | info                    |
| disable                           | Optional    | SIDEKICK\_AGENT\_DISABLE                           | false                   |
| brokerHost                        | Optional    | SIDEKICK\_AGENT\_BROKER\_HOST                      | Sidekick broker address |
| brokerPort                        | Optional    | SIDEKICK\_AGENT\_BROKER\_PORT                      | Sidekick broker port    |
| brokerClient                      | Optional    | SIDEKICK\_AGENT\_BROKER\_CLIENT                    | Logged in user          |
| applicationId                     | Optional    | SIDEKICK\_AGENT\_APPLICATION\_ID                   | Generated by agent      |
| applicationName                   | Optional    | SIDEKICK\_AGENT\_APPLICATION\_NAME                 | Empty string            |
| applicationInstanceId             | Optional    | SIDEKICK\_AGENT\_APPLICATION\_INSTANCE\_ID         | Generated by agent      |
| applicationVersion                | Optional    | SIDEKICK\_AGENT\_APPLICATION\_VERSION              | Empty string            |
| applicationStage                  | Optional    | SIDEKICK\_AGENT\_APPLICATION\_STAGE                | Empty string            |
| applicationTag                    | Optional    | SIDEKICK\_AGENT\_APPLICATION\_TAG                  | None                    |
| maxFrames                         | Optional    | SIDEKICK\_AGENT\_MAX\_FRAMES                       | 20                      |
| maxExpandFrames                   | Optional    | SIDEKICK\_AGENT\_MAX\_EXPAND\_FRAMES               | 1                       |
| maxProperties                     | Optional    | SIDEKICK\_AGENT\_MAX\_PROPERTIES                   | 10                      |
| maxParseDepth                     | Optional    | SIDEKICK\_AGENT\_MAX\_PARSE\_DEPTH                 | 3                       |
| scriptPrefix                      | Optional    | SIDEKICK\_AGENT\_SCRIPT\_PREFIX                    | './'                    |
| rejectOnStartup                   | Optional    | SIDEKICK\_AGENT\_REJECT\_ON\_STARTUP               | false                   |
| captureFrameDataReductionCallback | Optional    |                                                    | None                    |
| logMessageDataReductionCallback   | Optional    |                                                    | None                    |
| errorCollectionEnable             | Optional    | SIDEKICK\_AGENT\_ERROR\_COLLECTION\_ENABLE         | false                   |
| errorCollectionEnableCaptureFrame | Optional    | SIDEKICK\_AGENT\_ERROR\_COLLECTION\_CAPTURE\_FRAME | false                   |