---
description: This tutorial applies to both IntelliJ IDEA, PyCharm & WebStorm
---

# Browsing Tracepoint Events

<iframe width="560" height="315" src="https://www.youtube.com/embed/Kqgd8tj6LFI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 


When the code execution hits the tracepoint,  Sidekick automatically captures a tracepoint event, which will then appear in the table of Sidekick Tracepoint Events at the bottom.

Until the first event is received, the events table will be shown as empty.

![Sidekick - Tracepoint Event Table](<../../../.gitbook/assets/Tracepoint Event Table.png>)

When more snapshot events are captured, they will be listed in the table shown below:

![ Sidekick - Tracepoint Event Table Filled](<../../../.gitbook/assets/Tracepoint Event Filled.png>)

You can search a substring of the following columns to narrow down the list: _Host Name, Application Name, Class Name, Method Name, Line No._

![ Sidekick - Tracepoint Event Search](../../../.gitbook/assets/TracepontEventSearch.png)

If too many events are received above a certain threshold, they will not be listed in the table as a protection mechanism. This case is indicated by the red text above the table. You can click the trash icon near the search box to clear the table.

![Sidekick - Tracepoint Event Table Filled](<../../../.gitbook/assets/Tracepoint Event Table Filled.png>)

:::info
Note that the table row count limit is 1000.
:::
