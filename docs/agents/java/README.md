---
slug: /agents/java

description: >-
  This topic describes how to prepare the application environment and install
  the Sidekick Java Agent
---

# ☕ Java

Sidekick automatically connects to Java applications with a very easy setup with no-code configuration.

:::info
To plug the Sidekick Agent into your Java application, please follow the instructions [here](configuration). 
:::

### Supported JVMs and Languages

* JDK 8+ is supported
* Java (8+), Kotlin (1.3+) and Scala (2.10+) JVM languages are supported

### Tested Frameworks

* Spring Web (4.x, 5.x)
* Spring Boot (1.x, 2.x)
* Quarkus (2.x)

### Limitations

* Tracepoints and logpoints can be put onto executable codes inside methods. Constructors and static initializers are not supported yet.
* Only method arguments and local variables are captured while getting a snapshot of the tracepoint. Member or static fields of the owner object (instance of the class where tracepoint was put) are not captured yet.
* Only the top frame (the method where the tracepoint was put) snapshot is captured. Lower frames' (caller methods in the call stack) snapshots are not captured yet but frame class name, method name, and line numbers are provided.

