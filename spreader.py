#!/usr/bin/env python3

import argparse
from utils_api import get_sentiment, get_news_headers, get_factcheck

def request_analysis(phrase: str, func) -> dict:
    res = func(phrase)
    return res


def main(phrase: str):

    res = get_sentiment(phrase)
    print(f"Sentiment:\n\t{res['label']} ({res['confidence']})")
    print("---------------------")

    res = get_factcheck(phrase, datadir='data')
    print("Fact check:")
    thres = 0.35
    for k in 'Fake True'.split():
        if (res[k.lower()]['score'] > thres):
            score = res[k.lower()]['score']*100
            title = res[k.lower()]['title']
            print(f"\t{k} story match: {score:.1f}%)\n\t -> ({title}")
    print("---------------------")

    res = get_news_headers(phrase, key_pageSize=3)
    print("Recent news:\n\t")
    for i,a in enumerate(res['articles']):
        print("\t"+str(i+1)+". \""+f"{a['title']}"
            +"\"\n\t"+f"{a['url']}\n******   ")
    print("---------------------")


if (__name__ == "__main__"):
    parser = argparse.ArgumentParser(description='Fakespreader dashboard')
    parser.add_argument('-s', type=str, dest='phrase', help='Input phrase')
    parser.add_argument('-f', type=str, dest='path', help='Path to file')
    args = parser.parse_args()

    phrase = ''
    if (args.phrase != None): phrase = args.phrase
    elif (args.path != None): phrase = get_transcript(args.path)

    if (phrase != ''):
        main(phrase)
    else:
        raise Exception("Input not recognised.")

