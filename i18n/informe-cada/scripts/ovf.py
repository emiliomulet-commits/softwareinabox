import re,sys,glob,html
W=760
for l in sys.argv[1:]:
    bad=[]
    for f in sorted(glob.glob(f'out/{l}/ig/*.svg')):
        for m in re.finditer(r'<text x="([\d.]+)" y="[\d.]+" font-family="Inter" font-size="([\d.]+)" font-weight="(\d+)" fill="[^"]*" text-anchor="(\w+)"[^>]*>(.*?)</text>',open(f).read()):
            x,sz,wt,an,t=float(m[1]),float(m[2]),int(m[3]),m[4],html.unescape(m[5])
            w=len(t)*sz*(0.56 if wt>=600 else 0.53)
            l0,r0={'start':(x,x+w),'middle':(x-w/2,x+w/2),'end':(x-w,x)}[an]
            if r0>W-12 or l0<12: bad.append((f[-8:-4],round(r0),t[:60]))
    print(l,len(bad)); [print('  ',b) for b in bad[:15]]
