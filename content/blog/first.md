+++
date = 2014-08-25T08:38:16Z
draft = false
title = "Building a new homepage using Hugo"
description = "foobar"
+++

I have decided to rebuilt my current homepage using Jekyll, the static site generator. Before this I used Octopress which helps you to get started in very little time. But, as a nice little side project, I decided to build my blog / webpage from scratch.

```
hugo server --theme=helix --buildDrafts --watch
```
```
<section id="main">
  <div>
   <h1 id="title">{{ .Title }}</h1>
    {{ range .Data.Pages }}
        {{ .Render "summary"}}
    {{ end }}
  </div>
</section>
```
Understanding how gene expression evolves and how selective pressures on the phenotype shape the evolution of gene expression is a major question in evolutionary biology. Even between very closely related species we observe an astonishing amount of phenotypic variation. This variation is partly the result of differences in gene content, such as through mutations in protein coding genes, but also the result of differences in gene expression. The genome is not static - each cell in a multi-cellular organism expresses genes differently, depending on tissue type, sex or environmental factors. In my research I try to understand how gene expression evolves within and between species.


```
def addToContextTree(seq, tree, maxN = 5):
  for i in xrange(len(seq)):
    current = tree
    for n in range(maxN):
      if (i - n) >= 0:
        word = seq[i-n]
        if word not in current:
          current[word] = [{}, 0]
        current[word][1] += 1
        current = current[word][0]
```