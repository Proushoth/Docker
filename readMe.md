### Core concept of docker

1.What is a container and how it is different from virtual machine?

- Container is and isolated enviorment for running application, it is much lighweight than a virtual machine.

- It is based on operating system level virtualization 

- It includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

- Virtual machine is an abstract of the the local machine. It uses hypervisor to run application in isolation.

- Difference 
 Each VM needs a full blown OS to run the application but container gives the same function in a much more lightweight method by sharing the host OS kernel.  It is much more lightweight to run, Faster to start and does not need a seperate OS to run the application in isolation.
 
2. Image vs container vs volume vs network

