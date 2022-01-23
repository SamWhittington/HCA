from deepgram import Deepgram
import asyncio, json
import argparse

# The API key you created in step 1

parser = argparse.ArgumentParser()
parser.add_argument('--url', type=str, default='https://static.deepgram.com/examples/Bueller-Life-moves-pretty-fast.wav')
args = parser.parse_args()

async def dg(phrase: str):
    # Initializes the Deepgram SDK
    dg_client = Deepgram('d65c64d60bd88adb0b65ec52770bc069e96723c5')
    source = {'url': str}
    
    # print('Requesting transcript...')
    # print('Your file may take up to a couple minutes to process.')
    # print('While you wait, did you know that Deepgram accepts over 40 audio file formats? Even MP4s.')
    # print('To learn more about customizing your transcripts check out developers.deepgram.com.')
    
    response = await dg_client.transcription.prerecorded(source,  {'punctuate': True})
    # print(type(response))
    output = response["results"]["channels"][0]["alternatives"][0]["transcript"]
    # print(type(output))
    return output
# print(json.dumps(response, indent=4))

def audio2text(phrase: str) -> str:
    print(asyncio.run(dg(str)))

if __name__ == '__main__':
    str = args.url
    audio2text(str)
# asyncio.run(main(str))
