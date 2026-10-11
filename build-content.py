import pathlib, re, json
root = pathlib.Path(__file__).resolve().parent
text = (root / 'content/guide.md').read_text(encoding='utf-8')
chapters = []
for part in re.split(r'^## ', text, flags=re.M)[1:]:
    title, body = part.split('\n', 1)
    chapters.append({'title': re.sub(r'^\d+\. ', '', title), 'body': body.strip()})
if len(chapters) != 14:
    raise ValueError('本版交互与自测按14章设计；增删章节前请同步更新 app.js 与 index.html。')
(root / 'web/content.js').write_text('const chapters=' + json.dumps(chapters, ensure_ascii=False) + ';', encoding='utf-8')
print('Generated 14 chapters')
