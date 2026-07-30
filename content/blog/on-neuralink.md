---
title: "On Neuralink"
date: "2026-07-30"
summary: "Breaking down core concepts, from neural signals to the N1 implant, through a first-principles lens."
---

I'm curious about how Neuralink combines neuroscience, engineering, and systems thinking to interface with the human brain. My background includes working with people with disabilities, where I conducted interviews across age groups and conditions. One thing consistently stood out: what people value most is independence.

This write-up breaks down core concepts, from neural signals to the N1 implant, through a first-principles lens.

## The website about Neuralink

Our brain-computer interface translates neural signals into actions. In our clinical trials, people are using Neuralink devices to control computers and robotic arms with their thoughts. This technology will restore autonomy to those with unmet medical needs and unlock new dimensions of human potential. (ALS, Quadriplegia)

A good book to read: *Brain-Computer Interfacing: An Introduction* by Rajesh P.N. Rao

## What does brain computer interface mean?

A brain-computer interface (BCI) is a technology that allows direct communication between the brain and an external device, like a computer or robotic limb, by translating brain signals into actions.

BCI system needs:

- **Signal acquisition:** Detect neural activity
- **Signal decoding:** Translate signals into meaningful impact
- **Action execution:** Send the decoded signal to an external system

BCI can offer a level of independence and autonomy.

## What are neural signals?

Neural signals are basic units of the communication system in the nervous system. They start as electrical changes in a neuron, caused by charged ions moving across its membrane. When the signal reaches the end of the neuron, it becomes a chemical message, crossing a tiny gap to pass information to the next cell. This electrochemical process allows the brain and body to coordinate action, perception, and thought.

Human brain has about 86 billion neurons.

Neurons in the brain communicate using both electrical and chemical signals. Neuralink is building a brain-computer interface (BCI) that can read and write these neural signals. In the current human trials the N1 is recording only; stimulation, the "write" half, is a stated roadmap capability rather than a demonstrated human result.

It is developing a generalized input/output (I/O) platform for the brain, designed to be safe, biocompatible, and minimally invasive. The technology aims to restore autonomy for people with serious medical conditions, such as paralysis. In the long term, it may also unlock entirely new forms of human communication and cognition.

Neuralink's N1 implant captures these neural signals across 1024 electrodes distributed over 64 threads.

- Reduce human suffering
- Augment human capabilities through a direct brain-computer-interaction
- Understand and expand consciousness

The implant body sits in a craniectomy in the skull; the threads are what enter the motor cortex.

**What is motor cortex?** Responsible for planning, controlling and executing voluntary movements. Ex: Move your hand back and forth.

To achieve these goals, the N1 implant can listen to and stimulate neurons, support fast wireless data transfer, operate continuously, and be implanted via fully automated surgery.

## Breakdown of the N1 implant

- BCI Interface is fully implantable, cosmetically invisible and designed to let you control a computer or mobile device anywhere you go
- Has a biocompatible enclosure that withstands physiological conditions several times harsher than those in the human body (PCTFE)
- **Battery:** Implant is powered by a small battery charged wirelessly from the outside via a compact, inductive charger that enables easy use from anywhere
- **Chips & Electronics:** Advanced, custom, low-power chips and electronics process neural signals and transmit to the Neuralink application, that decodes data stream to actions and intents
- **Threads:** Records neural activity through highly-flexible ultra thin electrode threads designed to minimise damage during implantation

Implant uses PCTFE (Polychlorotrifluoroethylene) in the casing to protect internal electronics:

- Electromagnetically transparent
- Chemically resistant
- Low water absorption
- Thermally stable

## What threads does neuralink use & how is it different?

Ultra-fine threads for electrode placement, and a specialized surgical robot.

The implantation is performed using a Surgical Robot. Why? The threads in the implant are so fine that they can't be inserted by a human, and also their big focus is on safety of the user. Needle is thinner than human hair, grasps, inserts and releases threads.

Neuralink uses a custom neurosurgical robot to implant its flexible threads with micron-level precision. It avoids blood vessels using advanced imaging and completes surgery in under an hour, making the procedure scalable and repeatable. The robot head consists of optics and sensors of 5 camera systems and the optics for an optical coherence tomography (OCT) system.

## Neuroplasticity

Also known as neural plasticity or brain plasticity. Defined as the brain's ability to adapt to changes.

A process that involves adaptive structural and functional changes to the brain. It is defined as the ability of the nervous system to change its activity in response to intrinsic or extrinsic stimuli by reorganizing its structure, functions, or connections after injuries, such as a stroke or traumatic brain injury (TBI).

**"Why do you mention about neuroplasticity?"**

Neuroplasticity is what makes it possible for users to improve over time, personalize their control, and even recover lost function in ways previously thought impossible.

- Stroke recovery, where undamaged brain regions take over lost functions
- Rehabilitation, where repeated tasks can strengthen new neural pathways
- Brain-Computer Interfaces (BCIs), where users must learn to modulate neural signals for control and the brain adapts to this new I/O loop

**Example:** Noland Arbaugh, a Neuralink clinical trial participant with quadriplegia, was able to move a computer cursor using only his thoughts. He set a record bits-per-second (bps) rate of 4.6 bps. Weeks after surgery a number of threads retracted from his brain, reportedly around 85 percent of them, resulting in a net decrease in effective electrodes and a drop in bps. Neuralink modified the recording algorithm to be more sensitive to neural population signals, improved how those signals are translated into cursor movement, and enhanced the user interface, which led to a rapid and sustained improvement that surpassed his original performance.

## Phased goals

Neuralink has phased goals for their vision:

- Motor and Speech (ALS/Stroke)
- Visual cortex (High channel write)
- Deep Regions (Neurological problems)
- Achieve safety endpoints

Goal is to go beyond the limits of biology. Each individual has different form of tetraplegia, widely varying from individual to individual, and they aim to reach a broader group of individuals.

**Future:** Next generation of how we interface with machines, and BCI could be the next version of that.

**Q. What is the capability of Neuralink right now?** Able to control devices simply by thinking, like moving a cursor.

Datarepo is Neuralink's platform for managing multimodal data.

N1 is a single implant that comes with a thread; future goal is to have two implants.

Physical challenge is the interface, it's something that always breaks. It is very different to simulate in digital space v/s the physical space, there can actually be harm in the physical space.

## Visual cortex

Even though the technology is same, for the visual cortex there is feedback visual processing & conscious human visual system.

- 1 million people are legally blind
- You can build retinal prosthetic devices that replace the function of retinal cells that are degenerated
- Create phosphenes using stimulating visual cortex
- Adding pixels and brain would be able to figure out the pixels
- Pre-processing and there is so much data, and whether that happens in the retina or it happens in the visual cortex, "filtering"

## Speech

Sergey Stavisky, Jaimie Henderson, and Krishna Shenoy, who died in 2023, developed a mathematical framework for analyzing neural activity called "computation through dynamics."

Richard A. Andersen, Neuroscientist.

The human brain controls everything that the body does.

## Open Questions I'm Curious About

- How does the N1 implant handle signal degradation over time? There's a paper I found around this: [Nature](https://www.nature.com/articles/s41528-025-00410-x.pdf)
- How does the implant deal with stability of signal captures?
- Is the long-term goal to transition from single-user decoding to multi-modal shared control (e.g. vision + motor)?

## References

- https://www.healthline.com/health/neurons
- https://neuralink.com
- https://www.ncbi.nlm.nih.gov/books/NBK557811/
- https://medicine.washu.edu/news/brain-rewires-itself-after-injury-on-the-edge-of-whats-compatible-with-life/
- https://stacks.stanford.edu/file/druid:jx921pv3255/TechnicalReport01_GPT_BCIs-2021-05-20.pdf
- https://www.elonx.net/how-does-neuralink-measure-the-performance-of-its-interface/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC6914248/
- https://pmc.ncbi.nlm.nih.gov/articles/PMC3497935/
- https://www.nature.com/articles/s41528-025-00410-x.pdf
