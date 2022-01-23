from deepgram import Deepgram
import asyncio, json
import argparse


async def dg(local_path: str):
    # Initializes the Deepgram SDK
    dg_client = Deepgram('d65c64d60bd88adb0b65ec52770bc069e96723c5')
    
    with open(local_path, 'rb') as audio:
    # Replace mimetype as appropriate
        source = {'buffer': audio, 'mimetype': 'wav'}
        response = await dg_client.transcription.prerecorded(source,  {'punctuate': True})
        output = response["results"]["channels"][0]["alternatives"][0]["transcript"]
    
    return output



def get_transcript(local_path='') -> str:
    """
    Get transcript from audio using Deepgram services
    """
    if not local_path:
        print('Using sample local path')
        local_path = 'life-moves-pretty-fast.wav'

    return(asyncio.run(dg(local_path)))
