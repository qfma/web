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
