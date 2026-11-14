import tokenize,io,ast,re,hashlib,json,sys
EXCL={'hecho','previsto','escenario','weight','risk','ig'}
def toks(src):
    return list(tokenize.generate_tokens(io.StringIO(src).readline))
def keep(v):
    return isinstance(v,str) and re.search(r'[A-Za-zÀ-ÿ]{2}',v) and v not in EXCL and not v.startswith('#') and not re.fullmatch(r'ig\{.*',v)
def sid(v): return hashlib.sha1(v.encode()).hexdigest()[:10]
def extract(path):
    out={}
    for t in toks(open(path,encoding='utf-8').read()):
        if t.type==tokenize.STRING and not t.string[:1] in 'fF':
            v=ast.literal_eval(t.string)
            if keep(v): out[sid(v)]=v
    return out
def generate(path,tr,dst):
    src=open(path,encoding='utf-8').read(); lines=src.split('\n')
    res=[]; miss=0
    for t in toks(src):
        if t.type==tokenize.STRING and not t.string[:1] in 'fF':
            v=ast.literal_eval(t.string)
            if keep(v):
                n=tr.get(sid(v))
                if n is None: miss+=1; n=v
                res.append((t.start,t.end,json.dumps(n,ensure_ascii=False)))
    # apply replacements from the end
    for (sr,sc),(er,ec),rep in sorted(res,reverse=True):
        assert sr==er
        l=lines[sr-1]; lines[sr-1]=l[:sc]+rep+l[ec:]
    open(dst,'w',encoding='utf-8').write('\n'.join(lines)); return miss
if __name__=='__main__':
    if sys.argv[1]=='extract':
        d=extract('make_ig_es.py'); json.dump(d,open('ig_strings_es.json','w',encoding='utf-8'),ensure_ascii=False,indent=0); print(len(d), sum(len(v) for v in d.values()))
    else:
        lang=sys.argv[2]; tr=json.load(open(f'ig_strings_{lang}.json',encoding='utf-8'))
        print('missing',generate('make_ig_es.py',tr,f'make_ig_{lang}_gen.py'))
