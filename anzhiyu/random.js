var posts=["2026/07/21/hello-world/","2026/07/22/大模型微调技术学习/","2026/07/27/rag学习/","2026/07/27/学习计划/","2026/07/28/AI知识图谱GraphRAG/","2026/07/28/不了解知识汇总/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };