from IPython.display import YouTubeVideo
from transformers import pipeline
from youtube_transcript_api import YouTubeTranscriptApi

summarizer = pipeline('summarization')

def summarize_transcript(video_id:str):
    YouTubeTranscriptApi.get_transcript(video_id)
    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    result = ""
    for i in transcript:
        result += ' ' + i['text']

    num_iters = int(len(result)/1000)
    summarized_text = []
    for i in range(0, num_iters + 1):
        start = 0
        start = i * 1000
        end = (i + 1) * 1000
        out = summarizer(result[start:end], max_length=70, min_length=30)
        out = out[0]
        out = out['summary_text']
        summarized_text.append(out)

    output = str(summarized_text)
    output = output.replace('[', '')
    output = output.replace(']', '')
    output = output.replace('"', '')
    output = output.replace("'", '')
    output = output.replace(',', '')
    output = output.replace('"', '')
    return output
    