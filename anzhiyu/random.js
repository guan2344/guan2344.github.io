var posts=["2026/07/21/hello-world/","2026/07/27/rag学习/","2026/07/22/大模型微调技术学习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };