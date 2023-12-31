# M3TV Network
![](https://hackmd.io/_uploads/S17etZvfT.jpg)

https://hackmd.io/@boomboxhead/m3tv-dev

[toc]

___

## Why

1. **Building a Production Hub**: By focusing on quality production, the content itself becomes a portfolio, attracting sponsorships and creating new opportunities. This "field of dreams" approach emphasizes building something substantial first, with the belief that recognition and further opportunities will follow.

2. **Leveraging the Content Beyond Social Media**: While platforms like YouTube can be useful for distribution, there's a desire to go beyond just chasing likes. The aim is to use the content to foster a community and create a hub for production opportunities.

3. **Developing an Independent Platform**: Having your own website allows for the addition of unique features not available on mainstream social platforms. This independence can be more rewarding and opens up avenues for innovative content distribution and community engagement.

4. **Exploring New Economic Models**: Integrating concepts like NFTs and cryptocurrencies into your network, moving away from traditional advertising revenue models like Google AdSense or TikTok. This approach could offer a new way to monetize content and engage with the audience.

5. **Decentralizing Production and Distribution**: You're contemplating creating a decentralized production economy, controlling the entire supply chain, including distribution. This decentralization could break the bottleneck often experienced in traditional web2 platforms.

6. **Ownership and Governance**: The idea of making the project a multi-signature entity and forkable reflects a democratic and open-source approach. Delegating decision-making to a DAO (Decentralized Autonomous Organization) or through community voting is considered to challenge traditional gatekeeping in content production.

7. **Redefining Goals and Values**: The project isn't solely focused on profit; it aims to disrupt discovery and foster creativity. By taking risks and not predefining success solely in terms of profit, there's potential for a significant network effect.

In summary, the vision is to create a self-sustaining, innovative content production and distribution network that transcends traditional social media norms, embraces new technologies and economic models, and fosters a democratic and creative community. This approach aims not just to produce content but to redefine the very ecosystem in which it exists and thrives.

___

## JSON Schema Ideas for Media and Content Distrobution

This JSON schema is designed for managing, automating, and presenting a 24/7 live broadcast network named M3TV. The JSON includes various components to accommodate shows, commercials, live events, interrupts, and interviews. It is structured to provide all the required details for a network programmer. 

https://www.figma.com/file/Y3qClwxIryXEMMkKoBIjds/m3tV-Network?type=whiteboard&node-id=0%3A1&t=BqnHKP5UK8v8WDtO-1

![image](https://github.com/gm3/m3tv-network/assets/7612104/39077d79-2d80-4c7e-808d-8a9a1d9a54f0)

A high-level overview detailing the content flow for the system.

## Revenue Pathway
- **OpenAI**: Produces shows which feed into the NFT Projects.
- **NFT Projects**: Interacts with the MINT process.
- **MINT**: Possibly involved in minting NFTs, uses NFT Metadata.
- **Revenue Generation**: 
  - **Treasury**: Influenced by a DAO vote/multisig mechanism.
  - **Sponsors**
  - **NFT Sales**
  - **Commercials**

## Frontend Pathway
- Content is displayed or interacts with the frontend through:
  - **Events**
  - **Preposals** (Might be a typo; possibly meant "Proposals")
  - **Donations**
  - **Website**

## Operators
- **Remote OBS Control**: Part of the module for operators.
- **AI Show Runners**: Another entity in the operators module.
- **Mods (Moderators)**: Likely involved in managing or moderating the stream.
- **Stream**: Managed using the OBS Instance on AWS which has:
  - Different stages/scenes
  - Overlays
  - Video sources
  - Audio sources

## Metadata Storage and Automation
- **GitHub Actions**: Used to automate tasks like uploading videos and audios to AWS Storage. Triggered by the addition of a new media file.
- **Storage Distinction**:
  - **Cloud AWS Storage**: Explicitly for storing videos.
  - **Cloud AWS GPU Instance**: Possibly for processing or streaming.

## Streaming
- Managed by an **OBS instance on AWS** which uses:
  - Different scenes
  - Overlays
  - The encoding process signifies the conversion of media into a format suitable for streaming.


---

## Metadata Breakdown and Details

### Name
- `name`: The name of the network.

### Logo URL
- `logo_url`: URL for the network's logo.

### Website
- `website`: URL for the network's website.

### Social Media
- `social_media`: Social media links for the network.

#### Broadcasting API
- `broadcasting_api`: Endpoints for controlling the live broadcast.
  - `start_broadcast`: Endpoint to start the broadcast.
  - `end_broadcast`: Endpoint to end the broadcast.
  - `interrupt`: Endpoint to inject interrupts into the broadcast.

#### Analytics API
- `analytics_api`: Endpoints for analytics data.
  - `post_viewers`: Endpoint to send viewer data.
  - `post_interactions`: Endpoint to send interactions or engagements.

## Shows
- `shows`: List of shows to be broadcast.
  - `title`: Title of the show.
  - `description`: Description of the show.
  - `schedule_time`: Time when the show will be broadcast.
  - `status`: The status of the show (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting (lower is higher priority).
  - `assets`: Media assets like thumbnails and video files.
  - `tags`: Categorization tags.
  - `viewer_rating`: Average viewer rating.
  - `localization`: Localization data for different languages.
  - `permissions`: User roles who can alter or broadcast the show.
  - `fallback`: Fallback show in case of issues.
  - `seasons`: Seasons that belong to a show.
    - `episodes`: Episodes that belong to a season.

## Commercials
- `commercials`: List of commercials to be broadcast.
  - `title`: Title of the commercial.
  - `description`: Description of the commercial.
  - `length`: Duration of the commercial.
  - `url`: URL where it can be accessed.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the commercial will be broadcast.
  - `status`: Status of the commercial (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Live Events
- `live_events`: List of live events to be broadcast.
  - `title`: Title of the live event.
  - `description`: Description of the live event.
  - `start_time`: Start time of the live event.
  - `end_time`: End time of the live event.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the live event will be broadcast.
  - `status`: Status of the live event (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Interrupts
- `interrupts`: List of interrupts that can be injected into the broadcast.
  - `title`: Title of the interrupt.
  - `description`: Description of the interrupt.
  - `url`: URL where it can be accessed.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the interrupt will be broadcast.
  - `status`: Status of the interrupt (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Interviews
- `interviews`: List of interviews to be broadcast.
  - `title`: Title of the interview.
  - `description`: Description of the interview.
  - `length`: Duration of the interview.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the interview will be broadcast.
  - `status`: Status of the interview (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

## Virtual Demo Days
- `virtual_demo_days`: List of virtual demo days to be broadcast.
  - `title`: Title of the virtual demo day.
  - `description`: Description of the virtual demo day.
  - `start_time`: Start time of the virtual demo day.
  - `end_time`: End time of the virtual demo day.
  - `encode_info`: Encoding information.
  - `schedule_time`: Time when the virtual demo day will be broadcast.
  - `status`: Status of the virtual demo day (e.g., scheduled, live, completed).
  - `priority`: Priority for broadcasting.

---

### Example JSON

<details>
    
```json
{
  "network": {
    "name": "M3TV",
    "logo_url": "logo.png",
    "website": "https://URL",
    "social_media": {
      "facebook": "",
      "twitter": "",
      "instagram": ""
    },
    "broadcasting_api": {
      "start_broadcast": "https://API/start",
      "end_broadcast": "https://API/end",
      "interrupt": "https://API/interrupt"
    },
    "analytics_api": {
      "post_viewers": "https://API/viewers",
      "post_interactions": "https://API/interactions"
    },
    "shows": [
      {
        "title": "Show 1",
        "description": "Description for Show 1",
        "schedule_time": "2023-01-01T12:00:00Z",
        "status": "scheduled",
        "priority": 1,
        "assets": {
          "thumbnail": "thumbnail.png",
          "video_file": "video.mp4"
        },
        "tags": ["comedy", "prime-time"],
        "viewer_rating": 4.5,
        "localization": {
          "en": {
            "title": "Show 1",
            "description": "Description for Show 1"
          },
          "es": {
            "title": "Espectáculo 1",
            "description": "Descripción para el Espectáculo 1"
          }
        },
        "permissions": {
          "alter": ["admin", "editor"],
          "broadcast": ["admin"]
        },
        "fallback": "Fallback Show 1",
        "seasons": [
          {
            "season_number": 1,
            "episodes": [
              {
                "episode_number": 1,
                "title": "Episode 1",
                "description": "Description for Episode 1",
                "url": "episode1",
                "director": "John Doe",
                "producer": "Jane Doe",
                "cast": [
                  "Actor 1",
                  "Actor 2"
                ],
                "length": "45m",
                "genre": "Comedy",
                "social_media": {
                  "facebook": "https://URL",
                  "twitter": "https://URL",
                  "instagram": "https://URL"
                },
                "call_to_action": {
                  "text": "Watch Now",
                  "link": "watch/episode1"
                }
              },
              {
                "episode_number": 2,
                "title": "Episode 2",
                "description": "Description for Episode 2",
                "url": "episode2",
                "director": "John Doe",
                "producer": "Jane Doe",
                "cast": [
                  "Actor 3",
                  "Actor 4"
                ],
                "length": "42m",
                "genre": "Action",
                "social_media": {
                  "facebook": "https://URL",
                  "twitter": "https://URL",
                  "instagram": "https://URL"
                },
                "call_to_action": {
                  "text": "Watch Now",
                  "link": "watch/episode2"
                }
              }
            ]
          }
        ]
      }
    ],
    "commercials": [
      {
        "title": "Commercial 1",
        "description": "This is a commercial",
        "length": "30s",
        "url": "commercial1",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T12:15:00Z",
        "status": "scheduled",
        "priority": 2
      }
    ],
    "live_events": [
      {
        "title": "Live Web3 Interop",
        "description": "Live streaming of Web3 interoperability discussions",
        "start_time": "2023-01-01T12:00:00Z",
        "end_time": "2023-01-01T14:00:00Z",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T11:45:00Z",
        "status": "scheduled",
        "priority": 3
      }
    ],
    "interrupts": [
      {
        "title": "Urgent News",
        "description": "Breaking news interrupt",
        "url": "urgent_news",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T13:30:00Z",
        "status": "scheduled",
        "priority": 4
      }
    ],
    "interviews": [
      {
        "title": "Interview with CEO",
        "description": "An exclusive interview with the CEO",
        "length": "20m",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-01T15:00:00Z",
        "status": "scheduled",
        "priority": 5
      }
    ],
    "virtual_demo_days": [
      {
        "title": "Virtual Demo Day 1",
        "description": "Startups showcasing their products",
        "start_time": "2023-01-10T09:00:00Z",
        "end_time": "2023-01-10T12:00:00Z",
        "encode_info": "H.264, AAC",
        "schedule_time": "2023-01-10T08:45:00Z",
        "status": "scheduled",
        "priority": 6
      }
    ]
  }
}


```

</details>

___

## Network Operations Manual

### Overview
We are at the intersection of entertainment, education, and cutting-edge technology, focusing on Metaverse interoperability, 3D modeling, avatars, and virtual worlds. Our mission is to captivate viewers through a rich tapestry of content forms—from memes that capture the zeitgeist, to deep-dives into market trends, and even tutorials that empower our audience. Whether it's short-form interviews with industry trailblazers or long-form conversations with experts dissecting the nuances of 3D engineering, our content is designed to be as entertaining as it is insightful.

---

### Core Challenges

#### 1. Content Strategy
- Determining what kind of content resonates with the audience.
  
#### 2. Scalability
- Processes and resources need to scale with increasing content and viewership.
  
#### 3. Resource Management
- Efficient allocation and management of human and financial resources.
  
#### 4. Quality Control
- Ensuring the consistent quality of content across various shows and formats.
  
#### 5. Audience Engagement
- Building and sustaining a dedicated viewer base.
  
#### 6. Revenue Generation
- Monetizing content without sacrificing quality or viewer engagement.

---

### Roles and Responsibilities

- **Network Executive**: Overall strategy and business decisions.
- **Program Manager**: Managing the schedule and content pipeline.
- **Marketing Manager**: Audience growth and engagement strategies.
- **Technical Support**: Ensuring all technical aspects run smoothly.
- **Legal Advisor**: Handling legal aspects like contracts and copyrights.

---

### Content Pipeline

1. **Idea Generation**
    - Brainstorming and conceptualizing new content ideas.
  
2. **Scripting and Pre-production**
    - Writing scripts, storyboards and planning production details.
  
3. **Production**
    - Actual filming, recording, or live streaming.
  
4. **Post-production**
    - Editing, VFX, and preparation for distribution.
  
5. **Content Calendar Management**
    - Planning and tracking content publishing schedules.

---

### Marketing and Audience Strategy

1. **Social Media**
    - Regular updates, audience interaction, and data analytics.
  
2. **SEO**
    - Keyword strategy for all content and meta descriptions.
  
3. **Collaborations and Partnerships**
    - Strategic alliances to increase reach and viewership.
  
4. **Feedback Loop**
    - Monitoring and acting on audience feedback.

---

### Financials

1. **Budgeting**
    - Detailed budgets for each show and operational expenses.
  
2. **Monetization Models**
    - Strategies for generating revenue, e.g., ads, sponsorships, merchandise.
  
3. **Revenue Tracking**
    - Regular tracking and reporting of income and expenses.



#### Financial Projections

We aim for steady growth in both viewership and revenue streams. To keep track of our progress, the following Key Performance Indicators (KPIs) have been set:

- **Monthly Active Viewers**: Target of X% increase each month.
- **Engagement Rate**: Aim for a Y% engagement rate (likes, shares, comments per views).
- **Cost Per Episode**: Maintain at or below $Z.
- **Revenue Streams**: Diversify to at least N sources (e.g., ads, sponsorships, merchandise).

#### Financial Reporting

- **Monthly Financial Reports**: To be reviewed during the first meeting of each month.
- **Quarterly Reviews**: In-depth review to assess KPI achievement and set goals for the next quarter.

---

#### Crew Payment
- $X per week per crew member
  - Total for Y weeks: $X * Y

#### Equipment & Software
- OBS (free)
- Virtual production studio software: $Z
- Additional plugins: $A

#### Miscellaneous Costs
- Music and media licenses: $B
- Cloud storage: $C
- Backup hardware: $D

---

### Quality Control

1. **Content Guidelines**
    - Standards for content quality, ethics, and compliance.
  
2. **Quality Assurance Checks**
    - Regular audits to ensure all shows meet network standards.

---

### Meeting Agenda


- Weekly sync-up meeting to discuss the following:
  1. Review last week's episode
  2. Plan for next week's episode
  3. Discuss any technical challenges

### Network Programmer Meeting for Content Production

For an efficient 30-minute meeting, we'll focus on reviewing episodes, deciding on budget, allocation, production teams, and schedules.

#### Pre-Meeting:

- **Agenda Distribution (at least 48 hours prior)**:
  - Ensure all team members have a copy of the meeting's objectives, expected outcomes, and pre-read materials.

- **Pre-read Materials**:
  - Include the latest episode statistics, upcoming production schedules, and any major technical updates or challenges.

#### Meeting Structure:

##### Opening (2 minutes):

###### Opening Remarks:

> "Welcome, team. Today's meeting is crucial for shaping the upcoming episodes and ensuring the smooth running of our production process. Let's make the most out of the next 28 minutes."

##### Quick Check-in (3 minutes):

- Each team member briefly mentions a concern or an achievement regarding the last episode or upcoming plans.

##### Agenda Overview (1 minute):

- Brief outline of what will be discussed during the meeting.

##### Episode Review (4 minutes):

- A concise review of the last episode, focusing on key performance indicators like user engagement, visual and audio quality, and content relevance.

##### Priority Discussion Points (15 minutes):

- Segment into three 5-minute blocks:
  1. Budget and Allocation
  2. Production Teams and Roles
  3. Production Schedule and Upcoming Episodes

- Each segment starts with a 1-minute overview, followed by a 3-minute discussion, then a 1-minute summarization.

##### Decision Points & Voting (3 minutes):

- Key decisions such as finalizing the budget, confirming roles, and setting the production schedule.
- Utilize project management tools for instant voting or polling.

##### Action Items & Responsibilities (1 minute):

- Quick assignment of tasks and responsibilities based on the discussions and decisions made.

###### Closing Remarks (1 minute):

> "Thank you all for your insights and contributions. Let's make sure to follow through on our action items. Here's to another successful episode."

#### Post-Meeting:

- **Minutes & Action Items Distribution**: Within 24 hours, a recap of the meeting and next steps should be sent out.

- **Follow-up**: A check-in meeting to gauge progress on the action items.

#### General Tips:

- **Time-keeping**: Assign a timekeeper.
- **Stay On Topic**: Keep discussions focused on agenda items.
- **Feedback Loop**: Post-meeting feedback for continuous improvement.


---

## Dev To Do

- Watchdog showdrop()
    - drop files into a folder so that it can update the show
    - showschedule.json will be needed to injest to the main show json


- schedule.json
    - the main schedule

### OBS Template


### OBS Scene COllections

This is a JSON example of a scene collection which we will use to make the OBS script, this is a list of all the layers

<details>
    
```json
    "scene_order": [
        {
            "name": "_MAIN"
        },
        {
            "name": "_______________"
        },
        {
            "name": "_24HOURS"
        },
        {
            "name": "____________________"
        },
        {
            "name": "_OVERIDE"
        },
        {
            "name": "_2hour"
        },
        {
            "name": "_1hour"
        },
        {
            "name": "_30mins"
        },
        {
            "name": "_15min"
        },
        {
            "name": "_10mins"
        },
        {
            "name": "_5min"
        },
        {
            "name": "_3mins"
        },
        {
            "name": "_2mins"
        },
        {
            "name": "_1mins"
        },
        {
            "name": "_30secs"
        },
        {
            "name": "_15secs"
        },
        {
            "name": "_FALLBACK"
        },
        {
            "name": "_________________"
        },
        {
            "name": "_Audio"
        }
    ]
```
</details>


## Front End Ideas

### 1. **VoD vs Live Streaming**
- Discussing whether to include Video on Demand capabilities or focus solely on live streaming.

### 2. **Gamification and 3D Elements**
- Plans to introduce gamified elements and 3D features, with an emphasis on simplicity.

### 3. **User-Requested Features**
- Considering features for a Twitch-like service, including interactive mini-games and VRM support.

### 4. **Chat Integration**
- Integration of a chat service like kapchat from NightDev, and positioning of the chat in the UI.

### 5. **Development Challenges**
- Discussing technical aspects such as transcoding, server authentication, and admin interfaces.

### 6. **Design and Responsiveness**
- Focusing on creating a mobile-responsive interface, initially following Twitch-style UI.

### 7. **Content and Community Aspects**
- Aiming to build a community-focused platform with 24-hour content and AI NPCs and avatars for interaction.

### 8. **Content Distribution Network and Web3 Integration**
- Desire to disrupt traditional CDNs and integrate Web3 technologies for a decentralized experience.

### 9. **Business Model and Monetization**
- Planning to integrate a commission model through NFTs and Web3 transactions.

### 10. **Technical Tools and Alternatives**
- Exploring tools like Owncast and emphasizing not reinventing existing solutions.

### 11. **Web3 Native Approach**
- Leveraging Web3 for user interactions and management, potentially replacing email lists.

### 12. **Content Strategy**
- Focusing on a niche audience interested in 3D technology, web3, and gaming; considering a DAO for content management.

___

## Low friction, high impact virtual productions

We are looking for high impact, low friction productions. For instance, shooting in realtime vs doing weeks of aniamtions. 15-30 second clips, mainly for social media, but they can be played in sequence to tell the whole story. We can record them weekly, or we can record them all in one or two sessions, and edit them to be released over days or weeks. 

## Realtime Content Creation Ideas 
- **Live-comic** idea, similar to "Spy vs. Spy," with a simple and repetitive concept.
- **Discord Content** - Using Discord for capturing real conversations in a comic format.
- **Recurring themes**: "let 'em cook" or 
- **Recurring punchlines**: We talk on discord, idea guys comes up with crazy idea, and then jin sais make a hackmd and end the bit with "Get back to work."
- **Recreate mock video game scenes** but in a parody with our characters, like we did with the metal gear solid bit
- **Send video messages** to each other publically as our avaters, simple things such as "Virtual Voicemails" but in public to create story arcs.
- **Blending different formats**, similar to "Roger Rabbit." or Cool World
- **Incorporating distinct characters**, like an anime character, into streaming, and do special twitch channel and social media for these AI characters to evolve. 
- **Travel between reality and the virtual world** breaking the 3rd wall, such as art gallery coverage, and event coverage from inside the metaverse, but covering reality events.
- do reaction videos as a virtual character watching real life videos
- **AI Series** Explore using an AI character as a main character in a series that talkes directly to social media in small clips that are fun and can be decrypted like a puzzle, causing social media engaugement
- **Interactive Storytelling Sessions**: Use AI to generate story prompts or scenarios in real-time based on audience input during a live stream. This can evolve into an interactive storytelling experience where the audience influences the plot's direction.
- **AI-Driven Character Debates**: Create characters powered by AI that can debate on current topics or random subjects. Audiences can suggest topics in real-time, and the characters, using AI responses, engage in humorous or insightful debates.
- **Virtual Reality Improv Shows**: Performers in VR environments respond to live audience suggestions, creating spontaneous and humorous skits. These performances can be captured in real-time using tools like VRChat.
- **Real-Time Music Creation**: Utilize AI to compose music live, based on themes or moods suggested by the audience. This could be combined with visual artists drawing or animating in real-time to the music.
- **AI-Powered News Segment**: An AI character delivers the latest news, but with a twist. The news is slightly altered or exaggerated for comedic effect, akin to a satirical news show.
- **Virtual Fashion Show**: Using digital avatars, host a fashion show where the outfits are created in real-time based on audience suggestions or themes.
- **Dynamic Cooking Show**: An AI suggests recipes in real-time based on ingredients suggested by the audience. A host or chef attempts to cook the dish live, adding an element of unpredictability and fun.
- **Real-Time Travel Vlogs**: Using a mix of live footage and virtual environments, create a travel vlog where the destination changes based on viewer votes or suggestions.
- **Live-Animated Book Readings**: Narrate stories or books while AI or live artists provide real-time illustrations or animations that complement the storytelling.
- **Virtual Reality Escape Room**: Stream a live interactive escape room experience where the audience helps solve puzzles in real-time to aid the performer's escape.
- **AI-Assisted Comedy Skits**: Use AI to generate joke or skit ideas that performers act out live. The randomness of AI-generated content could add a unique twist to each performance.
- **Virtual Pet Interactions**: Create a virtual pet that audiences can interact with in real-time, influencing its actions and responses.
- **DIY Craft Sessions with AI Suggestions**: Host crafting sessions where AI suggests creative twists or new crafting ideas based on audience input.
- **Fitness Challenges with Virtual Instructors**: Conduct live fitness sessions where virtual instructors lead workouts that change based on audience participation or challenges.


## Ease of Production & Live Compositing
- Focus on low-friction production methods.
- Utilizing live-compositing with just a green background for performers.
- Record content in OBS live
- Some tools we can use are VRCHat, VSeeFace, BUNSHIN, MagicMirror, MagicML

## AI in production
- Bring in AI response live while making content to provide context, research insight
- Use AI in the writers room to automate mood boards derived from live capture of audio in the room
- Use AI to record the writers room, and then transcribe to a script
- Emphasis on brainstorming and note-taking for idea development.

## M3TV 24-Week Production Schedule

Expand to see schedule

<details>

| Week | Episode Topic                         | Commercial Topic                    | Host  | Guests | Cast | Producer | Editor  | Complete |
|------|---------------------------------------|-------------------------------------|-------|--------|------|----------|---------|:--------:|
| 1    | Live-comic                            | VR Improv Show                      | Name  | Name   | Name | Name     | Name    | [ ]      |
| 2    | Discord Content                       | AI-Powered News Segment             | Name  | Name   | Name | Name     | Name    | [ ]      |
| 3    | Recurring Themes                      | Virtual Fashion Show                | Name  | Name   | Name | Name     | Name    | [ ]      |
| 4    | Recurring Punchlines                  | Virtual Reality Escape Room         | Name  | Name   | Name | Name     | Name    | [ ]      |
| 5    | Mock Video Game Parodies              | DIY Craft Sessions                  | Name  | Name   | Name | Name     | Name    | [ ]      |
| 6    | Virtual Voicemails                    | Fitness Challenges                  | Name  | Name   | Name | Name     | Name    | [ ]      |
| 7    | Blending Different Formats            | Real-Time Travel Vlogs              | Name  | Name   | Name | Name     | Name    | [ ]      |
| 8    | Incorporating Distinct Characters     | AI Series                           | Name  | Name   | Name | Name     | Name    | [ ]      |
| 9    | Travel/Reality Metaverse Mix          | Interactive Storytelling            | Name  | Name   | Name | Name     | Name    | [ ]      |
| 10   | Reaction Videos                       | AI-Driven Character Debates         | Name  | Name   | Name | Name     | Name    | [ ]      |
| 11   | AI Character Series                   | Real-Time Music Creation            | Name  | Name   | Name | Name     | Name    | [ ]      |
| 12   | Live-comic (New Story)                | VR Improv Show (New)                | Name  | Name   | Name | Name     | Name    | [ ]      |
| 13   | Discord Content (Follow-up)           | AI News Segment (Update)            | Name  | Name   | Name | Name     | Name    | [ ]      |
| 14   | Recurring Themes (New Twist)          | Virtual Fashion Show (New Designs)  | Name  | Name   | Name | Name     | Name    | [ ]      |
| 15   | Recurring Punchlines (New)            | VR Escape Room (New Puzzle)         | Name  | Name   | Name | Name     | Name    | [ ]      |
| 16   | Mock Video Game Parodies (New)        | DIY Craft (New Project)             | Name  | Name   | Name | Name     | Name    | [ ]      |
| 17   | Virtual Voicemails (Response)         | Fitness Challenge (New Routine)     | Name  | Name   | Name | Name     | Name    | [ ]      |
| 18   | Blending Formats (New Mix)            | Travel Vlog (New Destination)       | Name  | Name   | Name | Name     | Name    | [ ]      |
| 19   | Incorporating Characters (New)        | AI Series (Continuation)            | Name  | Name   | Name | Name     | Name    | [ ]      |
| 20   | Travel/Reality Metaverse Mix (New)    | Interactive Storytelling (New Story)| Name  | Name   | Name | Name     | Name    | [ ]      |
| 21   | Reaction Videos (New Content)         | AI Debates (New Topics)             | Name  | Name   | Name | Name     | Name    | [ ]      |
| 22   | AI Character Series (New Episode)     | Live Music (New Genre)              | Name  | Name   | Name | Name     | Name    | [ ]      |
| 23   | Live-comic (Another Story)            | VR Improv (Another)                 | Name  | Name   | Name | Name     | Name    | [ ]      |
| 24   | Final Episode: Best of Series         | Best of Commercials Compilation     | Name  | Name   | Name | Name     | Name    | [ ]      |


</details>