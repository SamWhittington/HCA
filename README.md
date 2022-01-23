# HCA


## Inspiration

we have been inspired by the Shazam application allowing individuals to scan for sound patterns to see what music is played. We wanted to create a similar tool to fight disinformation, by allowing us to check if the person we are listening to is spreading fake information, sharing rumours, or being biased by its stance if being friendly in the first place.

## What it does
our tool uses text input (also obtainable from speech recognition and translation into text) to verify keywords with available fact-checking databases. Additionally, based on our algorithm, we could perform a similar activity with rumour detection, stance identification and sentiment detection.

## How we built it
in our repo you can see two ways we proceeded with - cli app showcasing logic of our backend to classify the sentiment of the statement and search the database for fact-checking. Second approach with proper front-end representation, and the ability to submit URL for an audio file to call Deepgram API.

## Challenges we ran into
availability of APIs to existing fact-checking resources is limited. Google API implementation served severe challenges; Full Fact API that we considered as an alternative is available only after license with Full Fact organization. On the other side, the Deepgram tool at the moment does not analyse real-time audio inputs, which require recording audio input.

## Accomplishments that we're proud of
working as a mixed team and being able to coordinate in order to deal with challenges effectively - for all of us this was a new field with a lot of investigation to be made.

## What we learned
that there are many NLP applications that could serve retail investors, journalists or laypeople in building an immune system against fake news. At the same time, people do not have tools to protect themselves at their fingertips.

## What's next for FakeSpreader
while proving that the way to tackle fact-checking, rumour spreading and stance association is possible, we wanted to check the capabilities of technology. With this success, we are confident that a tool to analyse fact chacking about companies, reviewing both audio and text inputs from real life or web, would be possible. Verifiability of claims about listed companies, that would be checked against their annual, quarterly reports or news statements would prevent people from emotional decisions on their investments and money in general. In the future, we would also like to develop tool matching language from the news with the volume of stock trading and social media mentions measuring 'pressure' under which company is and indicate a warning sign to investors or customers about the existence and nature of the issue that company is going through.
