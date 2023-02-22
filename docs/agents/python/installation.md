# Installation

Follow the below steps to install Sidekick Agent Python to your application.

* Install the latest Sidekick agent: `pip install sidekick-agent-python`
* Configure the agent via [exporting environment variables](installation.md#configure-by-environment-variables) or [creating .env file](installation.md#configure-by-env-file) and load it in source code.

## Configure Sidekick

:::info
In order to configure the agent, you'll need an API key which is gotten from Sidekick web site. You can see your API key at the center of screen.
:::

### Configure by Environment Variables

```
export SIDEKICK_APIKEY=<YOUR-SIDEKICK-API-KEY> 
export SIDEKICK_APPLICATION_NAME=<application_name>
export SIDEKICK_APPLICATION_STAGE=<application_stage>
export SIDEKICK_APPLICATION_VERSION=<application_version>
export SIDEKICK_DEBUG_ENABLE=True
```

### Configure by .env file

Create a file with the .env extension and add the following into it with your own environment variables.

```
SIDEKICK_APIKEY=<YOUR-SIDEKICK-API-KEY> 
SIDEKICK_APPLICATION_NAME=<application_name>
SIDEKICK_APPLICATION_STAGE=<application_stage>
SIDEKICK_APPLICATION_VERSION=<application_version>
SIDEKICK_DEBUG_ENABLE=True
```

## Add Sidekick to Your Application

You should start the Sidekick before your app is initialized or started. For example, you can add the following snippet at the end of your `settings.py` for Django project or beginning of the file where you create Flask app such as `app = Flask(`**`name`**`)`

#### Configure by Environment Variable:

```python
try:
    import tracepointdebug
    tracepointdebug.start()
except ImportError as e:
    pass
```

#### Configure by .env File:

:::info
To install environment variables from the configuration file, you should install `pathlib` and `python-dotenv` first.
:::

```python
from pathlib import Path
from dotenv import load_dotenv

env_path = Path(<.env file path>).resolve()
load_dotenv(dotenv_path=env_path)

try:
    import tracepointdebug
    tracepointdebug.start()
except ImportError as e:
    pass
```
