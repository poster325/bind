---
title: If You Spell Out TD, It's Twenties Dream
date: 2025-05-29
category: Case Study-EN
excerpt: The first case study of Bind, featuring Twenties Dream, a KAIST student band, and Kim, an amateur fiction writer.
author:
  name: Hyewon Lee
  role: Team Bind
  avatar: HW
image: /imgs/article1-cover.png
---

Hello! I'm Hyewon from the Bind team. 👋

In this article, I'll share the key results and insights from our first user study. I'll also explain why the system we're building is important and share the thoughts behind it!

### Before Reading This Article

This study was conducted to understand how our Bind system could actually work and to clarify the roles and interactions of each stakeholder. We specifically tried to answer the following:

1. The feasibility of a new role: the professional binder
2. The specific roles and necessity of the binder-customer-AI relationship
3. The utility of AI collaboration data collection and story creation process
4. The technical possibility and stability of the system

The study was conducted by simulating the entire process of our three-stage system in a wizard-of-oz format. Our Bind team directly acted as the system and conducted a total of 4 interviews.

---

## Study Participants

For this study, we matched **the 7-member band club _Twenties Dreams_** from KAIST as the customer group with **amateur novelist Kim** as the binder. The customer group _Twenties Dreams_ is an undergraduate club that regularly meets for band performances and practice sessions. Amateur writer Kim is a 20-something writer with extensive experience using AI, but has never used AI for actual novel writing. Through these two participant groups, we observed how group activities could be woven into different memories and reconstructed.

---

## First Interview: The Band's Fresh Passion and Romance

The first interview was conducted with Chan, the representative customer of the band club _Twenties Dreams_, where we acted as the binder. This interview was conducted to collect basic data about the customer for the second interview. Assuming a situation where the representative customer selects a binder and requests book production, we discussed basic information about the customer group, relationships between customers, and major events. We also had a light conversation for about 20 minutes about the desired mood and genre of the book, and what they would like or dislike to be included.

Chan expressed a desire to capture the passion and romance that only freshmen can feel, and the emotions that arise when reminiscing about those times later. Beyond simple documentation, they explained that it would be great if members could feel the fresh and emotional atmosphere together. They mentioned that a chronological structure would make it easier to follow memories and create a natural flow of the story. They also added that they wanted an overall cheerful and fun book, not too heavy and easy to read, one that could naturally bring laughter.

While there were no sensitive stories they wanted to exclude, they mentioned that there was a conflict between members due to attitude issues during last year's activities, but they felt it brought them closer together and would like it to be included.

<span style="color: gray; font-style: italic;">2025/05/18 14:00 conducted by <Bind Team> Sunwoo with <Representative Customer> Chan</span>
<br />
<u>[View Interview Notes 👀 →](https://www.notion.so/1f698e8928ec805e8cf5d7efb34585b4?pvs=21)
</u>

---

## Second Interview: Starting with Personal Relationships

In the second interview, we met with writer Kim on behalf of the representative customer and shared the results of the first interview. We also discussed how AI should collect data based on these results. To naturally draw out the writer's ideas and strategies for data collection, we asked about their usual writing style, and the interview was conducted online for about an hour in a casual atmosphere.

![image.png](/blog/articles/article1/image.png)

Writer Kim explained that they value emotional lines within the novel and reader immersion outside of it. They mentioned preferring a style where they set the climax first and then build the narrative structure, attaching probability to the beginning and end.

Kim began developing a strategy reflecting their style of **emphasizing emotional lines**, suggesting that starting with very personal things would be good to touch unconscious emotions. They felt that going through the entire timeline chronologically would make it difficult to capture the raw emotions of first memories, and ultimately proposed the following data collection strategy:

1. First understand each person's position in the group, who they're closest to, and who they feel awkward with
2. Ask about events, issues, and events connected to these relationships
3. Ask about what each person considers the climax of the period
4. Ask about the overall timeline

They added an explanation about why they wanted to **understand group relationships first**, saying that establishing and assigning character traits is the most important part of writing a novel. They also explained that rather than directly asking the representative customer what kind of book they wanted to make, they would prefer to understand the customer's preferences through indirect questions like:

> _What kind of books do you usually like? If I were the main character, what movie character would I want to be?_

They also strongly emphasized the **importance of rapport building** during data collection, explaining:

> _Even if it's the same interesting story about me, there's a difference between writing it down in a Google form and casually chatting about it with friends on KakaoTalk... I think AI could give a friendly enough feeling. Many people these days are friends with GPT._

<span style="color: gray; font-style: italic;">2025/05/18 15:30 conducted by <Bind Team> Hyewon with <Writer> Kim</span>
<br />
<u>[View Interview Notes 👀 →](https://clovanote.naver.com/s/ahmqfo5tYYrpXTs4G36M5AS)
</u>

---

## Third Interview: Same Activities, Different Emotions

In the third interview, we acted as AI and met with each customer member for data collection based on the second interview results. Following the data collection strategy set by writer Kim in the second interview, we conducted face-to-face interviews with all 7 band members for about an hour each.

As designed by writer Kim in the second interview, we tried to maintain a comfortable atmosphere by using informal speech for rapport building. Below are the results organized in order of the questions asked according to writer Kim's strategy, including who each member was closest to, who they felt most awkward with, and the climax events, along with summaries generated by ChatGPT 4o from the interview logs.

<details>
<summary>Member 1</summary>

- **Closest Member**: Member 5
- **Most Awkward Member**: Member 4
- **Climax**: KAMF Song Selection Meeting Conflict
- **Overall Summary**:  
 Member 1 is the vocalist and president of TD band, taking on the role of both music and mood maker. Their closest friend in band activities is Member 5, with whom they share a deep bond to the point of discussing personal concerns. The conflict during the song selection meeting and their experience giving feedback as president were important turning points that led to her growth.
</details>

<details>
<summary>Member 2</summary>

- **Closest Member**: Member 6
- **Most Awkward Member**: Member 1
- **Climax**: Discussion about Maintaining Presidency
- **Overall Summary**:  
 Member 2 is the guitarist and treasurer of TD band, also taking on the role of 'fun manager' to liven up the atmosphere. Initially feeling excluded in song arrangements and becoming withdrawn, they later recovered affection through honest conversations. Their most proud moment was when the team successfully completed a high-quality stage performance at the KBU concert.
</details>

<details>
<summary>Member 3</summary>

- **Closest Member**: Member 7
- **Most Awkward Member**: Member 4
- **Climax**: Mismatch between Personal and Band Music Style
- **Overall Summary**:  
 Member 3, who plays bass, initially had difficulty adapting to TD band's punk rock-centered repertoire. However, through ensemble performance experience, they discovered new appeal in the genre and their attitude and feelings changed. Their most proud moment was perfectly playing difficult bass parts during the Taffy Pack preliminary performance.
</details>

<details>
<summary>Member 4</summary>

- **Closest Member**: Member 6
- **Most Awkward Member**: Member 1
- **Climax**: Club Trip
- **Overall Summary**:  
 Member 4, who plays drums in the band, places more meaning on the friendship-centered atmosphere than ensemble practice. While the atmosphere was initially awkward, they gradually blended into the team through drinking sessions and trips. The most memorable moment during activities was feeling a true sense of belonging through interaction with members during the club trip.
</details>

<details>
<summary>Member 5</summary>

- **Closest Member**: Member 1
- **Most Awkward Member**: X
- **Climax**: Moment of Watching KAMF Stage as Audience
- **Overall Summary**:  
 Member 5 played keyboard in the band and is a member who values 'atmosphere' and 'chemistry' between people. They felt the team's teamwork more strongly when watching the KAMF stage as an audience member rather than when performing themselves. They experienced community and belonging through relationships with various people, centered around their deep bond with Member 1.
</details>

<details>
<summary>Member 6</summary>

- **Closest Member**: Member 4
- **Most Awkward Member**: Member 7
- **Climax**: Club Trip
- **Overall Summary**:  
 Member 6, who plays guitar, built close bonds with members through practice room-centered life. They felt the team's value more in ensemble practice and daily chemistry than in performances, and valued relationships with people. The class trip particularly became a turning point that strengthened emotional connection with the team.
</details>

<details>
<summary>Member 7</summary>

- **Closest Member**: Member 5
- **Most Awkward Member**: Member 4
- **Climax**: Sharp Decline in Passion After KBU Performance
- **Overall Summary**:  
 Member 7, who plays guitar, took on practical roles such as equipment management. Their intimate relationship with Member 1, which developed into a romantic relationship, influenced their activities throughout, and they experienced an emotional turning point as their passion sharply declined after KBU.
</details>

<span style="color: gray; font-style: italic;">2025/05/22, 2025/05/24 conducted by <Bind Team> Sunwoo with 7 <Customers>
</span>

---

## Fourth Interview: Dreams of the Twenties

In the fourth interview, we observed writer Kim's collaboration process with AI based on the third interview results. In this interview, we observed Kim using ChatGPT 4o to 1) analyze data and 2) create a novel based on the analyzed content. After the interview, Kim completed the novel in their personal time. During the observation process, we recorded Kim's main AI utilization actions and, based on these, asked about the intentions and feelings of each action at the end of each stage.

![image.png](/blog/articles/article1/image%201.png)

### **Data Analysis**

Kim was given 7 unedited interview logs and a list of terms to help understand the content, such as performance names. Kim proceeded by assigning a role to GPT, delivering the term list and rules, and then providing the interview logs one by one.

![First prompt entered by Kim after delivering basic information](/blog/articles/article1/Screenshot_2025-06-12_at_3.10.47_AM.png)

<figcaption style="text-align: center; color: gray; font-style: italic; font-size: 13px;">
First prompt entered by Kim after delivering basic information  </figcaption>

Kim also requested analysis of speech patterns for deeper understanding of the characters. They also used AI to search for specific events mentioned in certain interviews in other interviews.

![Prompt requesting speech pattern analysis entered by Kim](/blog/articles/article1/Screenshot_2025-06-12_at_3.12.09_AM.png)

<figcaption style="text-align: center; color: gray; font-style: italic; font-size: 13px;">
Prompt requesting speech pattern analysis entered by Kim  </figcaption>

![Prompt requesting material exploration entered by Kim](/blog/articles/article1/Screenshot_2025-06-12_at_3.13.03_AM.png)

<figcaption style="text-align: center; color: gray; font-style: italic; font-size: 13px;">
Prompt requesting material exploration entered by Kim  </figcaption>

After checking the summary of all data, Kim requested a character relationship diagram from GPT and, as explained in the previous interview, requested character traits to be assigned to each customer.

![Screenshot 2025-06-12 at 3.15.37 AM.png](/blog/articles/article1/Screenshot_2025-06-12_at_3.15.37_AM.png)

Kim noted that while the sequential dialogue method for data analysis works well with a small number of customers, it becomes difficult to remember previous content with many customers like in this case. They added that features like automatic keyword summarization or relationship diagram visualization could reduce the burden.

However, they also mentioned that a **gradual exploration structure that presents only some information when needed** would be more interesting and appropriate than providing comprehensive summaries from the beginning.

> _People often say that if the viewer isn't having fun, other viewers won't have fun either. I think novels are similar - if I, as the writer who has all the data, find it interesting, then the readers will find it interesting too._

### **Novel Creation**

After analyzing all the data, they proceeded with structuring by actively designing the novel's composition and receiving feedback from GPT. Regarding one of the items they asked GPT to evaluate, "what shouldn't be included in the novel," Kim added that while they didn't set prior constraints during data collection to get raw data, it was necessary to check additionally during the novel composition planning process.

![Screenshot 2025-06-12 at 3.17.10 AM.png](/blog/articles/article1/Screenshot_2025-06-12_at_3.17.10_AM.png)

Also, during the process of confirming inclusion refusal, GPT analyzed interview speech patterns and flow for evaluation, but Kim revealed that they don't trust AI 100% in this role. They explained that while AI is strong in quantitative analysis like frequently mentioned keywords, there are **clear limitations in qualitative analysis** such as subtle nuances in speech patterns.

![Kim's response to GPT's speculative answer about emotional analysis](/blog/articles/article1/Screenshot_2025-06-12_at_3.19.45_AM.png)

<figcaption style="text-align: center; color: gray; font-style: italic; font-size: 13px;">
Kim's response to GPT's speculative answer about emotional analysis </figcaption>

Kim proceeded with novel creation by planning the chapter structure through conversation with GPT and, as in the data analysis phase, giving rules for novel creation. They paid special attention to content distortion since the story is based on personal unique memories and facts, and included content about balancing the amount so that everyone could be the main character once. Kim explained that unlike regular novels where specific characters are the main characters, this was a piece for all group members, so this aspect needed special attention.

![Novel creation rules entered by Kim](/blog/articles/article1/Screenshot_2025-06-12_at_3.28.20_AM.png)

<figcaption style="text-align: center; color: gray; font-style: italic; font-size: 13px;">
Novel creation rules entered by Kim </figcaption>

Kim first wrote a few short sentences based on the interview content related to the composition they requested from GPT in the order of chapters they had composed. They then proceeded with writing by requesting paragraph completion from GPT and giving feedback. Kim also used **AI for purposes beyond creation, such as material exploration and work evaluation**, requesting evaluation of the organic connection between paragraphs.

![Material exploration prompt requested by Kim during novel creation](/blog/articles/article1/Screenshot_2025-06-12_at_3.32.00_AM.png)

<figcaption style="text-align: center; color: gray; font-style: italic; font-size: 13px;">
Material exploration prompt requested by Kim during novel creation </figcaption>

After the creation process was completed, Kim expressed that they felt the **necessity of human involvement in structural planning**:

> _When weighting information and arranging flow, there's a possibility of distortion or not proceeding in the desired direction without human intervention..._

However, they added that **AI's potential in the process of completing sentences and expanding them into paragraphs and books** within the rules and framework set by humans is clear.

<span style="color: gray; font-style: italic;">2025/05/29 22:00 conducted by <Bind Team> Hyewon with <Writer> Kim</span>
<br />
<u>[View GPT Log 🤖 →](https://chatgpt.com/share/6835cfc4-dd6c-8002-b49f-92ea2f1e1192)
</u>
<br />
<u>
[View Interview Notes 👀 →](https://docs.google.com/document/d/1uLwcjNfbbsi90bJSfp-Mx7pYcY3kVBFh/edit?usp=sharing&ouid=116745969831713657422&rtpof=true&sd=true)
</u>
