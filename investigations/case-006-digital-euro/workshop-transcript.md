Summary

### Pilot Overview

- The Eurosystem is conducting a 12-month pilot starting in the second half of 2027 to validate functional design and test technical readiness for a potential Digital Euro issuance
- The pilot will take place in a controlled Eurosystem environment with Eurosystem staff (5,000-10,000 participants) and merchants offering everyday services (15-25 merchants)
- The pilot will involve real-world transactions using a digital means of payment issued by European Central Banks, operating within the PSD2 framework
- This will not be the legal Digital Euro with legal tender status, but will bear similar technical and design characteristics

### Key Objectives

- Validate technical and operational readiness before scaling to the wider Eurozone
- Test functionality and supporting processes for 12 months to absorb feedback and improve the Digital Euro value proposition
- Learn and refine go-to-market strategy based on pilot insights
- Test end-to-end experience across all stakeholder groups (consumers, businesses, PSPs, and Eurosystem)

### Use Cases Being Tested

- **P2P with alias**: Transferring funds to peers using phone number or unique access number through Digital Euro app or PSP-integrated app
- **P2P offline**: Cash-like transactions using NFC technology where both devices tap together while offline, with immediate settlement and privacy features
- **P2B point of sale**: In-person retail payments using digital euro
- **P2B e-commerce**: Online shopping payments using digital euro

### Technical Infrastructure

- Digital Euro Service Platform (DASP) will be provided by the Eurosystem with instant settlement capabilities for converting central bank money and commercial bank money
- The Eurosystem will provide a Digital Euro app and SDK for PSPs who wish to integrate services into their proprietary banking applications
- The platform will support offline capability, tokenization, and alias lookup functionality
- The infrastructure will use a central ledger (not blockchain), though some blockchain-related technologies may be utilized

### PSP Participation Requirements

- PSPs can participate as distributing PSPs, issuers, or acquiring PSPs (or multiple roles where relevant)
- Distributing PSPs can offer services through the Eurosystem-provided app or integrate into their proprietary banking application
- Acquiring PSPs need to support participating merchants with softPOS and e-commerce solutions

### PSP Responsibilities

- Complete preparation and development of Digital Euro services
- Complete DASP onboarding process and back-end certification
- Support pilot execution for 12 months and provide feedback based on defined metrics
- Onboard end users and maintain responsibility for end user relationships and support
- End users must have a commercial bank money account with the participating PSP to open a digital means of payment account

### Selection Process and Timeline

- **March 2025**: Call for Expression of Interest publication with technical documentation, PSP participation agreement, and application questionnaire
- **6-week application period**: PSPs submit applications
- **Q2 2025**: Selection and signing of contracts with selected PSPs
- **2026**: PSPs develop digital euro services and front-end/back-end connectivity
- **Early 2027**: DASP onboarding, integration, user testing, and back-end certification
- **H2 2027**: Pilot launch for 12-month period

### Selection Criteria

- **Basic eligibility**: Technical capabilities, reliable operations, and valid EU license
- **Balanced selection factors**: Market reach, target setup, existing pilot experience, and ability to gather user feedback
- Geographic coverage across ECB and participating National Central Banks (NCBs)
- Coverage of all four use cases
- A limited number of PSPs will be selected to ensure a controlled environment

### Additional Details from Q&A

- Consumer organizations and underrepresented groups will be involved through continuous engagement with consumer groups and the Euro Retail Payments Board (ERPB)
- B2B use cases are not included in the pilot scope
- PSPs include banks, neo-banks, e-money institutions, and payment institutions under PSD2
- PSPs must participate as individual companies, not consortiums (though they can work with technical service providers)
- Payment and wallet providers like EPI can participate and may integrate Digital Euro into their existing wallet solutions
- PSPs will not be financially or non-financially remunerated for pilot participation
- Digital Euro will be free for basic use for consumers according to draft legislation
- Waterfall and reverse waterfall funding features will be part of the pilot
- Multiple digital euro accounts per user are not in scope for this pilot

### Technical Details Addressed

- Offline transactions will be tested for peer-to-peer use cases using mobile devices
- SoftPOS infrastructure uses NFC technology on devices like smartphones and tablets for tap-to-pay
- Funding of digital euro accounts will be done through PSPs using Target infrastructure
- UTXO is not currently planned to be used

### Key Success Metrics

- Technical robustness and system performance parameters
- Usability testing and user perception validation, especially for new features like offline payments
- Both quantitative metrics and qualitative feedback through dedicated focus sessions with end users
- Learnings will inform potential design adjustments and rulebook updates

### Important Notes

- The pilot tests a digital payment means that is close to but not the legal Digital Euro, as legislation is still being negotiated
- The pilot will only test the technical setup selected by the Eurosystem, not alternative technology solutions from other providers
- An innovation track will be started later this year for broader market engagement
- Third-party service providers are welcome to work with PSPs to determine participation approaches
- Merchants must be onboarded by participating NCBs through contractual relationships

### Next Steps

- Additional information session planned for early March 2025 to address remaining questions
- Follow updates on the Digital Euro website and official LinkedIn page
- Feedback requested from participants via provided QR code

### Action Items

- [ ]  Eurosystem to publish Call for Expression of Interest in March 2025
- [ ]  Eurosystem to organize additional information session in early March focusing on unanswered questions
- [ ]  Interested PSPs to review technical documentation when published and submit applications within 6-week window
- [ ]  Eurosystem to resolve livestream technical issues and potentially re-record presentation

Notes

Transcript

My name is Evelien Witloch, I'm the director of the Digital Euro project and I will be moderating the session of today. I want to thank you for joining us in such big numbers. We had a big interest in this session. So we had over a thousand participants. That means that we cannot do it in Teams, but we do it in Teams and live stream. So we have people on both sides. And that brings some practicalities, which will be on the next slide.

back of the live screen if you want to ask questions to go to slido.com there's the code or you can scan the code you will see when we present that on each slide there is this qr code so when during the presentation there is a question you can scan the code and enter the question there The way it works, as I think most of you would be aware, is that we will have questions that are already there, can be uploaded.

So if you go there and you see a question that you have as well, please upload this one instead of adding another question and also with that it's bigger that we can address your question. So with that, I would like to move into the session itself. We go to the next slide. As we have announced after the governing council decision end of October, the digital project is going into a new phase. And this is what you could call technical readiness phase.

And it is a preparation that will follow a flexible but also modular approach. It will focus on advancing our technical readiness, deepening market engagement and support, further support of the legacy process. The session today is focused, as I said already at the start, on the pilot activities. We are doing a pilot to validate the functional design, but also to progress and test the technical readiness.

or a potential issuance of a digital euro. Today's session is to inform you on how the pilot would look like and what it would mean. And also, Cynthia will also do a call for expression of interest for participating payment service providers. This is also a forum to make sure that they are well informed. All of this is preparing us, but of course, this is dependent on legislation. But if a legislation could be there in 2020, and we could foresee potential issues in 2029.

But that is far in the future. Today's session will really be about the pilot that we foresee to do in this space. So for that we have the following agenda. It's a rather simple agenda, but the first thing that we will discuss are the essentials of the pilot and then there will be the next steps. So the essentials of the pilot will be presented by Kirsten and then the next steps will be presented by Sebastian.

We will do a full presentation and after that we will go to the Q&A where we can address your questions. So with that, I would like to hand over to Kirsten.

Kirsten, go ahead. Thank you, Evelyn. And let me also echo here that I'm happy to see so many of you interested in the digital EuroPilot and dialing in this morning. I will be walking you through the essentials and share what we have in store for you. So, the Eurosystem will be running a pilot that will be lasting 12 months and is planned to start in the second half of 2027. And we will be conducting this pilot in a controlled Eurosystem environment.

That means as much as that we will be executing this with the Eurosystem staff and leveraging merchants that are providing everyday services to our staff. We are also looking to select a limited number of PSPs, and the selection process will kick off this quarter with the publication of the call for expression of interest. And it's important to mention here, it's on the slide as well, that this will be involving real-world transactions.

So the pilot is in no means a simulation or will entail dummy currency. There will be a real exchange of value and services. Now, I will explain more on the use cases and the participation of the various stakeholders, But before I do so, I would like to iterate the key objectives of the pilot and why we are doing this. First and foremost, we are doing this pilot to validate our technical and operational readiness before scaling and before exposing the project to the wider Eurozone.

The ability to validate our functionality and all of our supporting processes for 12 months allows us to absorb feedback, to learn and to improve the digital Euro value proposition. And any insights that we learn and take with us from the pilot will help us refine our go-to-market strategy. So the pilot is all about learning and validating of the design, establishing our technical and operational readiness of the robustness in our readiness.

This will facilitate us in any possible subsequent market rollout activities. Now, I mentioned the real-world transactions. As we don't have digital euro regulation at the moment, we will not be piloting the exact digital euro in its legal definition. But to facilitate real-world transactions, we will be leveraging on the PSD2 framework. That means that the transactions that we will execute during the pilot will be using a digital means of payment.

The digital means of payment would be issued by the European Central Banks and it would represent a liability subject to the legal rules for cashless payments. So this means of payment within the PSD2 framework is described as scriptural money under the definition of funds. So it would not be digital euro, including its legal tender status. It would also not be a banknote or a coin or an account with the euro system, but it would bear to the extent possible the technical and design characteristics akin to the digital URL.

Now back to the what we will be piloting. So for the pilot, we have selected four exciting use cases, two within the P2P domain and two within the P2B domain. So the first one is your P2P use case that would involve a payer transferring funds to their peer by leveraging an alias, such as a phone number or a unique access number, to push the funds to the recipients through either the digital euro app or digital service.

integrated into the PSP app. The second use case is actually one of the most important and distinguishing features of digital euro, being offline transactions. Supported by NFC technology, the payer would transfer the funds by tapping their phone to the recipient's phone. And as both devices are offline, the transaction is settled immediately on the devices itself. This use case is an excellent opportunity for validating the cash-like privacy capability of the offline digital euro.

and really prepares us for any scenarios in which there is no internet connection available. For the third use case, this is where the P2P context comes in. For the third use case, this is where the P2P context comes.

Key characteristics is of course the instant settlement layer that allows us to convert central bank money and commercial bank money. Also, we will be providing the market with a digital euro app provided by the euro system, but also an SDK for PSPs who are wishing to integrate this into their proprietary banking application. Throughout the apps that we will provide, the end users can fund and defund their accounts and also execute the digital Euro payments.

The offline capability is also facilitated through the DASP. and any supporting functionalities such as tokenization and the alias lookup component as well. We see here also in this visualization the third-party service providers. As the Digital Euro's ambition is to fit perfectly into the existing payments ecosystem, we welcome them, of course, to continuously support the PSP in their offering. And we welcome them to reach out as well to their partners and determine how they can participate in the pilot.

And I'm guessing only Pilots. Participation to give you an outlook as to the size also of the pilot. I mentioned we will be doing this in a controlled environment. So we were looking to select a limited number of PSPs. The selection criteria Sebastian will explain in the next section. But the ambition here is that we allow for adequate geographic coverage across the ECB and participating NCBs, the right coverage of all the four use cases part of the pilot.

If you're an interested PSP, you can apply as either or both, where relevant, a distributing PSP or an issuer offering the digital euro services to the Eurosystems staff by either supporting the Eurosystems provided app or by integrating your digital euro services into the proprietary banking application. From an acquiring point of view, obviously supporting the participating merchants, we expect them to offer the digital euro services to providing a softball solution and an e-commerce solution.

In general, for all PSPs, the responsibilities will include the preparation and the development of the digital euro services, ESPs would need to complete the onboarding process to the Digital Euro Service Platform and it would also include back-end certification to the DESP. It goes without saying that the PSPs who participate would support in the execution of the pilot and support the EURO system throughout those 12 months by providing the feedback based on a series of metrics that we will define.

The PSPs would be onboarding the end users and to that point would also remain responsible for the end user relationship and provide the adequate support that is needed during the pilot. To give an impression of the size of the pilot, at the moment we are expecting around 5 to 10,000 EuroSystems staff to participate. From a merchant point of view, we are currently expecting between 15 to 25 merchants offering everyday services to our staff.

Think about your coffee, lunch, merchandise or any ad hoc events that the ECB or the NCBs might want to organize for the pilot. To close off, We will be selecting a limited number of participants and unfortunately not all of you are working for the euro system, but being part of this controlled environment as a PSP or as a merchant really provides a unique opportunity to closely collaborate with the euro system and provide the best digital euro for Europe.

So for the next steps, please Sebastian, take the floor. Thank you.

Thank you, Kirsten. Before going to Sebastian, I've been notified that for the live stream the sound is working, but the video is not working. We're working on this and we will share, of course, the slides after the presentations. We hope to resolve this as soon as possible. But just that if you're in the video, you will hear us, but the video is not there yet. We try to resolve this. With that, I I'll hand over back to Sebastian.

Go ahead.

Yes, very pleasant. Good morning as well from my site. Um.

I believe I'm on screen, right? Because yes, now I can see myself, perfect. Yeah. Great to see so many familiar faces, or actually not faces, but many names on the participant list. Many of you we have been working with over the past years to work on the design of a possible digital hero, more from a theoretical point of view. Now, and also hence it's very good to see also a lot of additional stakeholders joining today, we are focusing a bit more on what actually will this mean practically.

And I think the next steps right now that we will be outlining will give you that view. So, while all stakeholders are of critical importance for the success of the pilot and of course as well for the possible issues of the digital euro, PSPs play a focal role in distribution in context of the pilot. PSPs will be onboarding end users. They will be connecting to the neural system. They will be facilitating front-end and back-end integration there.

And with that, it is of utmost importance that we select a balanced set of PSPs to facilitate the success of the pilot. Here we have already in I think November last year published our call of intent to notify the market that the pilot will be happening and that we have the intention to do so. And now in a couple of weeks the call for expression of interest actually in March will be published alongside that call for expression of interest.

PSPs, or everyone else who likes to look at this, of course, will get a view on Partially the information we've been sharing today, but more details around technical and practical documentation, be it on the user journey, so what does the user experience should and could look like during the pilot, the technical end-to-end flows, and as well further technical documentation allowing BSPs to assess the capability and interest to participate in the pilot.

Along with that, there will be also the PSP participation agreement or you may call it contract that will facilitate and give you a view on the different roles and responsibilities and context of the pilot and as well defines the legal framework to which Kirsten has been alluding to earlier on. Of course of critical importance here this is where that you know how to apply and hand in your application.

So over the course of six weeks you also have access to the PSP application questionnaire and you hand this in to us and over the course of Q2 then our selection and then subsequent signing of respective selected PSPs will happen. So how do we do the selection? Selection you can see in twofold right. So on the one hand we have basic eligibility. So basic requirements which are of critical importance but uh let's say the entry point for you to participate in the pilot which are linked to your technical capabilities having reliable operations and of course as well the valid eu license to facilitate this and on top of this to facilitate A balanced selection to ensure that the use cases that Kirsten has outlined can be tested and can be validated accordingly, we need to select a set of PSPs that are able to cover the market reach we're intending.

We're looking at the target set up, the existing pilot experience, and the ability to gather user feedback. Overall, Let me reiterate again, during this period, we will provide the most of support we can for you PSPs. So don't hesitate to reach out to us and make use of the documentation we provide. So once we have done the selection and signing in Q2, The preparatory work starts. The preparatory work, of course, at the Eurosystem site is already ongoing.

We have been starting our building in that regard. We've seen this with the selection of providers, etc., which we have made public. But also, and that's, you know, the next slide. the PSPs would start building. So this means PSPs would it develop? their digital euro services. This is a long the front end, so providing what Kirsten already said, the front end to consumers or merchants, but as well at the same time developing connectivity and ability to instruct settlement and so forth via DASP.

And the DASP onboarding is expected then to happen at the beginning of '27. integration there and subsequent user testing and back-end certification to actually see that all of this works out between us, the ECB and the EUROSystem and the PSPs before end users onboard it. And once that is completed, we expect to run the pilot for 12 months starting over the second half of '27. So. It is for us of critical importance that we really test end-to-end and validate design choice that we have made so far across all stakeholder groups.

So be it for a P2P payment, so between two private individuals making a payment, be it between a consumer and a business looking at the end-to-end experience, starting from the consumer side over to the merchant, facilitated by PSPs and of course the euro system. And here also we continue our engagement with respect to consumer as well as groups to ensure that the value proposition that we expect to have is met or can be further enhanced.

And this paves the road to possible additions of digital euro, ensuring market readiness across stakeholders. So while I believe this may have already triggered a lot of interest to participate in the pilot, maybe let me reiterate again on the next slide of why You may want to join the pilot and why we see this as a great opportunity. First and foremost, let's look at our currency. Let's look at your currency.

We can make the Digital Euro future-proof or we can make the Euro future-proof alongside this pilot. And so by developing the possible Digital Euro based on the legislative framework at the moment and development, that is one thing you can be participating in by joining the pilot because what we do during this pilot will of course inform the design choices for a possible Digital Euro. The Digital Euro would then be always a reliable option for everyone in the Euro area to pay available and distributed across the euro area and accepted throughout the euro area.

And per that it implies it's our money in our hands. We have the strength as Europe, our independence and non-reliance on non-European providers when it comes to digital payments. Reiterate again why I think for PSP but as well for end users this is a unique opportunity to participate. You get first an experience with the Digital Europe project and its key design choices. You can support the technical development of a possibility through close collaboration with the Euro system and for that also implement and facilitate the ultimate design of the digital hero and ultimately shape the next generation of digital papers.

With that, I would hand over again back to Evelyn for the Q&A.

Thank you very much, Sebastian. So I propose that even though we have some problems on the livestream still, we continue with the questions that we have here. Maybe we can also show the last slide and then take the questions that we have gotten via Slido. So the first question that we got is how consumer organizations and underrepresented groups that are not represented among your system staff be involved.

Let me give this question to Sebastian.

Yes, excellent. First and foremost, as said, for us it is of critical importance that we align and get across all stakeholders for the issue. This also means, of course, where we start in a controlled environment here, also possibly we have already, let's say, certain underrepresented groups within the euro system as staff here. We would, of course, encourage them to participate, but also in that context we will, of course, and I tried to outline this earlier as well, involve respective consumer groups merchant groups um as well for merchants yes the piece the the is a link of course to your system but please reach out to to respective entities reach out to psps um to um to to facilitate as well participation on your end and um we of course have as well our continuous engagement by the erpb um and and their sources views share this very publicly and take on that feedback to ensure that indeed the digital euro is something that meets the objectives we have set out amongst others of course inclusion of everyone who wants to have the digital euro as an option to pay.

Thank you, Sebastian. Let's go to the next question that we have. So that is on soft boss. And again, I want to give this one to Sebastian and it says, can you give a bit of details on your explanations on the soft boss? Thank you.

So, um, For those who are a bit closer to the merchant and terminal environment, of course, there is, let's say, the more traditional POS infrastructure as well as the soft POS infrastructure. Soft POS normally can be run on as well other devices that are not only made for payments, but for example, a smartphone, a tablet, etc. using NFC technology and a tab to pay setup.

Okay, thank you very much. I understood that the livestream people have been disconnected for a short while, but are now back and can also see, so I hope this is true. Just let me reiterate the two questions that were there. So one was on the consumer organizations and how they can be connected to the pilots. an answer there that we will also reach out to consumer organizations to see how we can involve them, of course, within the limitations that we have and gave an explanation on the softballs usage and how that looks like.

So another question that we got is given the ECB selected provider for the digital euro, again, it's a technology provider. that has not been chosen still joined the pilot to demonstrate one or four use cases. No, this will not be possible. So what we will test is the setup that we are preparing within the EUROSystem for the digital EUROSetup. So in there we work with the selected providers. We will in the course of this year start another innovation track where we will be reaching out further to the market.

So potentially there are possibilities there for other providers. So then there is a question, will the pilots be limited to retail consumers or will corporate customers also be considered? the role of corporate banking and development banks. Well, the scope of the digital euro in general, but also in the scope of the pilot, the B2B use case is not included. So the use cases that we are testing are focusing on retail customers.

So let me go to the question number five, where we have a question that asks: Are PSP banks or just payment providers? Let me give this question to Sebastian.

So, No, PSPs of course a broad term that is used in some interest in this way or that way. PSPs are financial institutions, e-money institutions, payment institutions. So these are banks, so your traditional, let's say retail bank, your neo bank, but as well of course those players who provide primarily just payment services, just in the sense it's quite complex but with a very niche focus there, specifically as well on the merchant acceptance side.

So in that regard, No, it's not just banks, but it's not just PSPs, but a broad set in line with what we can see under the PC2 regime.

So it's really payment service providers under the legal explanation of what the payment service provider is. Then we have a question. We see the questions going left to right, but we do them in the order of which they are asked and liked. So we see a question which is actually a bit outside the pilot scope, but it's asking that China recently decided to offer its interest on its ecosystem. Are we considering the same?

As you know, the ECB has always said that we would not have the intention to remunerate and also in the Commission proposal and also in the Council general approach it says explicitly that there will not be remuneration of the digital euro. Okay, so then let's go to the next question. Is each participant going to participate as a sole company or in the form of a consortium? So we are looking for payment service providers.

Of course payment service providers can work with, as I think Sebastian mentioned, with technical service providers to allow them for the technical capabilities, but the contract between the Eurosystem and payment service provider. Then there are, is another question, are payment and wallet providers allowed to participate such as EPI, BZoom and Apple Pay? And how do you expect them to participate?

So in the pilot design, it will be possible to, the payment service providers can offer their services to the end users because the payment service providers are Distributors as we explained in two ways. So they can offer these services by using the digital euro app for which also a version would be available in the pilot but they can also choose to integrate it in a wallet that they provide themselves.

For example an EPI bank can choose to offer these services by an EPI wallet or Rezoom wallet for that reason. Then there is indeed another question on Um... Are individuals and merchants participating in the pilot required to enter in a contractual relationship with the selected PSP? So maybe Kirsten, I can give the floor to you to answer this question.

Yes, indeed. End users would indeed need to have a commercial bank money account with the participating PSP in order to open up their digital means of payment account as well. So if they do not have that commercial bank money account yet with the participating PSP, they will need to open that for the purpose of participating in the pilot. Thank you, Kirsten.

As I said, we have a very different level of questions, but we take them one by one. So another question is: When the digital euro app detailed technical API specifications and requirements will be available for distributing PSPs? Maybe Sebastian, you can take the floor there.

So as we're discussing a bit the timeline around the pilot, right? One key milestone for us will be over the course of March. Over the course of March, we will publish the call for expression of interest. Alongside that, we will provide not only the PSP agreement, but as well along with that technical documentation. That technical documentation will include the paths arriving to the pilots, hence also relevant to the DeGiro app, the SDK and so forth.

Also then for selected PSPs, we will provide further details alongside the development over the course of 26 into 27. And of course, we will make every attempt to make this data as public possible to have everyone in the market having the information available.

Thank you, Nico. Then we have a question on offline payments. So it says, does the pilot include offline payments and how are these payments made? So yes, the pilot as was shown, there's one use case where we see offline for peer to peer use cases that will be part of the pilot. I would invite you to read the progress report on the offline and what we have published earlier, but in essence an offline transaction is a transaction between, in this case, two mobile devices where then the money will be moved from one mobile device to the other.

Okay,... then let's go to... The next question It says, the question is, it would be useful to test the functionalities with multiple digital euro accounts. Are you considering this? No, for now we are not considering this. We are, as you have seen also in the pilot, we will all not... It's not only in a controlled environment, so in a smaller environment, but also on the functionality, as you can see, we have a reduced scope to test the first setup.

That doesn't mean that we will not further add new functionality and new testing, but for the pilot scope we have also reduced the functionality. Okay, then there is a question on Will the technical specification for the pilot be made available on the Digital Euro website? Yes, we will make these available for all. As I said before, in the context of the call for expression of interest, those will be shared and can be looked at by anybody that is interested.

Okay, let me now go to another question. Will the digital euro rely on blockchain technology? We also have written more on this in our progress report. And we are not working on the blockchain as said. But we will use in the technical set some technologies that are used also in a blockchain environment, but the digital euro will be on a central ledger with the central WAN. So let me... Take a look what would be the next question.

So one question that we have is will Will the ECB... One moment. Will the ECB compensate PSPs for some of the costs they will bear from participation in the pilot? Maybe I can give the floor here to Kirsten.

Yeah, so as mentioned also I think in the declaration of intent and also in subsequent call for expression of interest, we will not be remunerating the participating BSPs in any financial or non-financial manner.

Thank you. So there is also a question on: Can you please provide some additional guidance on the application for the expression of interest? And maybe also here Kirsten, I give the floor to you.

Yes, so we proceed now that in March we will publish the call for expression of interest that will outline the scope of the pilot. It will give an additional layer of granularity to the story that we told you today. It will also include a questionnaire so you get a grasp of what we expect you to answer and any of the supporting evidence to further support your application. And also mentioned already, we will be providing the market with supporting documentation to really get comfortable of what is expected in terms of user journeys, end-to-end flows, UX requirements, etc.

And in a later batch, we will also provide the PSP participation agreement to understand what the roles and responsibilities are in order to participate in the pilot. to be six weeks and from thereafter we will perform the selection and hope to publish the results of the selection in Q2 2026 to allow the market sufficient time to be ready for the pilot in the second half of 2027.

Thank you. Okay, then I see a question on how many PSPs do you plan to have for the pilot? So as we said before, we foresee to have a limited amount of or restricted amount of PSPs since we are in a controlled environment. We have not fixed the full number yet because we also need to see a bit between the interest of the applying PSPs and the participating NCBs how to make the puzzle and how to come to the final number.

So we don't have a fixed number in our mind, but it will be a restricted number. So then there is a connected question whether PSPs will be obliged to cover all use cases, and if so, if all will need to be there on the first day. So In principle, the current view is that the PSPs would need to cover for all the use cases. A detailed plan for the pilot we also need to make together with the participating PSPs.

But we have one year of testing, so we want to use most of the time really for doing the testing. So at this point in time, the ambition would be to have all of them at the beginning. make when we have selected the participating PSPs so that we can make a final planning for the pilot in 102. Um... Then there is a question which I would like to give to Sebastian and that's the eligibility for e-comm use case is also restricted to merchants with contracts with ECB and CBs.

Could you please give an example?

So indeed we foresee that merchants are contract onboarded by a participating NCB and to be part of the pilot. Some of you may have an existing contract with an NCB, some of you may develop one and in that context you can then participate in the pilot and for further information also don't hesitate then to reach out to respect NCB to us the ECB and connect with us.

Thank you. And then we'll go to the question that says, which KPIs will be measured during the pilot? And how will the pilot be considered successful? Will the rulebook be modified based on the earnings of the pilot? So this is a long question. Let me start with the answering and then handing over to Kirsten for a more detailed question. The last one. So in general, what we want to test is the technical setup, both whether it works, but also in the design, whether the implementation that we foresee is the most efficient one.

So there are also the interaction with the merchants and with the PSPs will be very important for us to learn what is the most efficient way for all stakeholders to implement a digital euro. functionality in the broader sense of the digital year-round. Of course, the pilot can lead to adjustments even potentially to the design, but also to a technical setup. That's also one of the reasons why we do the pilot.

And that could ultimately need to be reflected in the rulebook, but that will be... And. a regular process as we go along. And maybe Kirsten, you can say a bit more on which are the things that we would like and some examples on the things that we would like to learn during the pilot.

Yeah, indeed. So you mentioned a lot already. So, of course, with any software project, we are looking to measure the robustness and the technical parameters for running such a solution. So that is a key aspect of the things that we will measure our success against. I mentioned it also before that the pilot would be a first step in a possible subsequent market rollout. where we would be scaling right in the internal euro system environment with a limited number of participants that does not necessarily extrapolate to the 350 million target users of the digital euro at the same time also here the digital euro is a new concept in the market with a lot of user journeys that resemble the classical payment users or journeys that we know but also for For example, in the offline use case, there are user journeys that we want to validate and we want to understand from a usability point of view and from a perception point of view if this works seamlessly.

And from there, we also we will do our technical testing, right? The quantitative metrics that we will measure, but we also foresee that we will organize dedicated focus sessions with the end users to really understand that data feedback there as well.

Okay, the question that we have now is: Does this mean that the digital euro account onboarding Watfall and reverse Watfall with a bank account is out of scope for the pilot. Let me see on Sebastian to give the answer there.

So no, all of this is part of, we haven't, I think we haven't given the details in this presentation where you see, you will see this in the call for expression of interest, that all of those features mentioned will be part of it, however, again back to the point that Chris made in the beginning of her presentation, it is not the digital hero, right? So the functionality is the key, to what we have designed so far and discussed with the market.

However, it is not the digital zero in legal terms. But all of the functionality that you have raised here will be part of the pilot, such as the waterfall, the reverse waterfall, and the count and so forth. Okay.

Thank you very much, Sebastian. We have a question here on how the digital euro initiative impact the European initiative, which will also work on peer-to-peer payments. Well, it will not impact That initiative, as we have said, the Digital Euro will be in complement to existing solutions. So the Digital Euro would be there separately. But as we have said, there is overlap in general and areas where the Digital Euro can support private initiatives and vice versa.

I would not go into that in the context of this session, but as I said before, For the participating PSPs, they can choose how to distribute the digital euro to their users. So the wallet solutions that are existing in European solutions could be reused by the participating PSP to distribute also the digital euro, so that you have a choice. There. I see a question that we have already answered. So will the pilot allow users to hold multiple digital Euro accounts?

No, as I said, we have a limited scope at the other. So if we go to a bit more technical question again, we see here, what level of technical development support capability will the ECB offer to participating PSPs, dedicated support teams and developer community? So for the pilot, we will work together with the NCBs, so the National Central Banks, and the National Central Banks and the ECB together will support the participating participants.

So both the merchants and the PSPs in developing and preparing for the pilot. In meetings of course there will be documentation, there will be platforms to share information, but all these details will be further shared and worked out with the participants. But there will be support for the pilot from the Eurosystem. Okay. Then there is a question. Let me look because we see that we get quite a number of questions that were already answered.

So we need to filter this a bit. So we have a question here, for example, what are the participants? We are the participants in the pioneer program for the digital euro and would like to contribute our solution to the test. How will this be taken into account? In the beginning, so the purpose of the pilot is to really test the technical setup that we foresee. In the end, potentially for an issuance of the digital euro asset, it will be limited in scope of functionality as in scale.

So it's not the full technical solution, but we will build on the providers that we have chosen there. On top of that, we will continue the work on innovation. A lot of the work that was done in the context of innovation last year was to use the Digital Europe platform and to build the services on top of that platform. And we will continue to work with the market to further develop these kind of services so that when there is a real issue at a point of time, Innovations could be sold through and made available, if wished so, by the market participants.

Then there is a question of what type of IT technology will the digital euro use to store the transactions. So blockchain of another IT solution as I said. So the digital euro infrastructure is not necessarily built to store the transaction but is to allow for the settlement of those transactions. technologies that are also used in blockchain. It will be a central ledger with the with the Euro system.

Then I have a question. What is the difference between instant payments and digital euro payments? Eurodigital. Indeed, EPI should sign an agreement with Europa and payments account to account will work in all Europe. Okay, I think this is a question a bit outside the scope of the pilot. The way I understand the question is that there are European solutions and there will be also a digital euro. The two will complement each other as we have explained in quite some occasions.

So complement and strengthen each other, as I said. Before, for example, the digital euro could be distributed via the wallets of these European solutions as well. On the other hand, the digital euro, for example, will facilitate standards in the market that strengthen the European solutions to widen their geographical scope, but even use case scope. Then I see a question. How is Giro money converted into digital euro?

Is it simply by transferring money to a specific digital euro account or a wallet? Maybe Sebastian, you want to take this one.

So that transfer ultimately is facilitated by PSPs using Target, i.e. our infrastructure we provide to PSPs. You will give your PSP an instruction saying, hey, I want to fund my, let's say, piloted Giro, whichever way we want to call that, and then that funding takes place. You don't need to provide a specific identifier there where this is the account I want to send the money to. No, you instruct your PSP and the PSP, based on its connectivity to our systems, then provides that funding using target infrastructure.

Thank you. Sebastian, let me check. Um. There's a question whether we will use UTXO. No, currently it's not foreseen to have UTXO. Why is the central bank not issuing and hosting the digital euro directly? How will you reassure that the transaction prices for consumers will be smaller? So the euro system will issue the digital euro. The distribution will be done via payment service providers. But the hosting of the settlement services will be done also by the euro system.

On the transaction pricing for consumers, in the current draft legislation and it was also maintained in the Council general approach, the digital euro will be free for basic use for consumers. Then there is a question: "The digital euro regulation is still being negotiated on the legislative level. How does the ECB ensure that the pilot fits the upcoming regulation?" So, we are very much aware that the digital euro regulation is still upcoming and we will make sure that when we issue a digital euro, which can only be considered after the legislation is adopted, that of course the digital The euro will fully follow the framework that has been provided by the legislation.

The digital euro pilot is, as we said, testing a digital euro that will be close to the digital euro that we currently know from what we know from the legislation, but also from the work that we have done together with the market in the rulebook. scope so it's not one-on-one the full digital euro in itself anyway but also because it's not the legislation is not there we will not test a legal digital euro so the pilot is to be able to progress to test things on the functionality on the technical setup which will also allow to further improve before having a final legislation in place and the final issuance.

So, um... Then there's a question on will reverse waterfall be part of the pilot scope as said by Sebastian? Yes, this is the case. Then There are quite a few questions on offline, I understand. And here I see one. So in offline solutions, do you intend to limit the number of transactions or value for them? And then how are the offline transactions synchronized with the ledger? This is a very detailed question on offline.

I would propose looking and we will look anyway at the end of this session to the questions that we have received. Because as you can see, we cannot answer all the questions. a lot of time. One takeaway we can take if we see so many questions on offline that more information or further information on offline would be valued. Looking to the time, I would propose that we start rounding off for today.

First of all, let me apologize for the disruption on the live stream. We are looking into what we can do to resolve that, whether we could record again the presentation that we have given, so that this is also feasible for the ones that but only via the live stream and we will keep you updated on on how we will do this then um as i said and as you probably have seen in slido we got a lot of questions uh we will i hope we have been well we have been able to answer quite a few um but there are still questions that we have not been able to answer so we are planning to um plan an extra in focusing probably around the beginning of March.

We will look into the questions that are still there to shape the information session in a way that it will address the points that you raise and that are important to you. So in order to stay tuned on the further information that we will give, of course you can follow our website, but also on LinkedIn we have a Digital Euro official page where we also post all these information sessions. and we will publish further information on the digital euro.

Then It would be good if you can give us and take some time to give us some feedback so that we can further improve for our upcoming events. There is a barcode also there. So if you scan that, you will be able to give us some feedback and that would be highly appreciated. With that, I would like to close. Thank you very much for your interest. Feel free to further reach out to us and again, stay tuned on the channels that we have and log in for the next focus session that we expect to take place at the beginning of March.

Thank you very much and have a nice day.
		
