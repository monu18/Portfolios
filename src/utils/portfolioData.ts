// src/data/portfolioData.ts

const portfolioData = {
  name: "Jeswyn Jas",
  title: "Data Scientist | Business Analyst",
  location: "Chicago, IL",
  email: "jas.jeswyn@gmail.com",
  phone: "(763) 340-3232",
  resume:"https://drive.google.com/file/d/1SWxTj2p0zfdVOw29EBaHHUMJ0H1wCtzn/view?usp=sharing",


  profileIntro: "My journey into data science didn’t start with code—it started with a belief: that data, when used intentionally, can drive not just performance, but progress. Today, I bring that belief into every project I take on. As a Data Science Consultant at Carlson Analytics Lab, I work with clients across aviation, public, and consumer sectors—recently building NLP classifiers and geospatial clustering models that helped a major airline automate report processing and reduce transportation costs by 20%. My work spans the full pipeline: business scoping, modeling, stakeholder alignment, and scalable deployment.\n\nBefore grad school, I led strategic analytics at Uber across Japan, Taiwan, Hong Kong, and South Korea. I built automated ETL pipelines in Python integrating 12+ data sources, saving 400+ ops hours annually and surfacing $60K in hidden revenue. I led a team of analysts, A/B tested incentive campaigns, and modeled funnel performance to streamline a $1.2B onboarding pipeline. For this, I received the OneUber Award. I also volunteered in Champions of Change, Uber’s DEI initiative—because building equitable systems matters just as much as building efficient ones.\n\nEarlier, at Fractal Analytics, I consulted for Philips across the U.S. and Canadian markets—developing regression models that improved forecast accuracy by 35%, reconstructing critical data via SQL and imputation, and delivering BI dashboards used across 50+ countries. My strength lies in connecting the dots: from technical design to business value, from raw data to insight, from vision to execution.\n\nI’m driven by a vision to make data work for those who need it most—whether it's global companies scaling decisions or underserved communities demanding visibility. Let’s connect if you're building something bold, human, and impact-oriented. I’d love to be a part of that journey.",

  blog:[
    {
      id:1,
      title: "Building a Retrieval-Ready Policy NLP Pipeline",
      intro: "In an age where data-driven decision-making is paramount, the ability to retrieve and analyze policy documents with context-sensitive precision is a game changer. In this post, we delve into building a Retrieval-Ready Policy NLP pipeline tailored for U.S. Name, Image, and Likeness (NIL) laws—leveraging spaCy, Latent Dirichlet Allocation (LDA), Principal Component Analysis (PCA), OpenAI embeddings, and large language models (LLMs). We’ll explore end-to-end design, from raw text ingestion through topic modeling and vector storage, culminating in a Retrieval-Augmented Generation (RAG) prototype that achieves 0.92 Recall@5 when querying NCAA player-week data.",
      image:"blog_1.png"
    },
    {
      id:2,
      title:"Predictive Success Modeling with XGBoost and Nested Cross-Validation",
      intro: "Predicting outcomes is at the heart of modern analytics. Whether you’re forecasting sales, churn rates, or student performance, robust predictive models can drive strategic decision-making. In this deep dive, we explore how to build a predictive success model—specifically targeting candidate performance on standardized assessments—using Python, XGBoost, scikit-learn, pandas, and statsmodels. We’ll cover data ingestion, feature engineering, nested cross-validation for unbiased performance estimation, hyperparameter tuning, and model interpretation.",
      image:"blog_2.png"
    },
    {
      id:3,
      title:"Sentiment Sphere—Real-Time Social Media Sentiment Analysis",
      intro: "In an era where opinions form and propagate at lightning speed across social media, real-time sentiment analysis has become indispensable for brand monitoring, crisis management, and market research. This post outlines the design and implementation of Sentiment Sphere—an end-to-end pipeline harnessing Python, BeautifulSoup, NLTK’s VADER, and API integrations to collect, process, and analyze social media chatter, even tackling informal language and sarcasm.",
      image:"blog_3.png"
    },
    {
      id:4,
      title:"Engineering a Distributed LLM Preprocessing Pipeline on AWS EMR",
      intro: "Preprocessing days-long volumes of raw text—tokenizing, filtering, and preparing for downstream LLM training—demands scalable, distributed architectures. In this post, we explore how to build an end-to-end LLM preprocessing pipeline using Hadoop, Spark, MapReduce, AWS EMR, and Deeplearning4j—processing over 5 GB of mixed-format corpora in under two hours.",
      image:"blog_4.png"
    }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/jeswynjas/",
    github: "https://github.com/Jeswyn",
    mail:"https://mail.google.com/mail/u/0/?fs=1&to=jas.jeswyn@gmail.com&tf=cm"
  },

  education: [
    {
      degree: "M.S. in Business Analytics",
      institution: "University of Minnesota, Carlson School of Management",
      location: "Minneapolis, MN",
      year: "Aug 2025",
    },
    {
      degree: "B.Tech (Hons.) in Chemical Engineering",
      institution: "National Institute of Technology",
      location: "Raipur, India",
      year: "Jun 2021",
    },
  ],

  experiences: [
    {
      role: "Data Science Consultant",
      company: "Carlson Analytics Lab",
      location: "Minneapolis, MN",
      duration: "Aug 2024 – Present",
      details: [
        "Implemented geospatial clustering for optimizing warehouse site selection.",
        "Achieved 18% reduction in transport costs and 30% improvement in operations.",
      ],
    },
    {
      role: "Senior Business Analyst",
      company: "Uber",
      location: "Hyderabad, India",
      duration: "Aug 2022 – Jul 2024",
      details: [
        "Built ETL pipelines for automated incentive payouts in North Asia.",
        "Led A/B testing for incentive campaigns in new city launches.",
        "Generated $60K in additional revenue; received 'OneUber' award.",
      ],
    },
  ],

  projects: [
    {
      name: "Sentiment Sphere",
      description:
        "Real-time sentiment analysis across social media using VADER and NLTK.",
    },
    {
      name: "Customer Credit Risk Profiling",
      description:
        "Clustering and profiling based on geo-location and behavioral indicators.",
    },
    {
      name: "Insurance Claim Prediction",
      description:
        "Built regression model to predict likelihood of claim using real-world data.",
    },
  ],

  skills: [
    "Python", "R", "SQL", "PySpark", "Power BI", "Tableau", "AWS", "A/B Testing",
    "Predictive Modeling", "Data Visualization", "Statistical Analysis",
  ],
  blogMetaData: [
  {
    id:1,
    slug: "how-i-built-my-portfolio",
    title: "How I Built My Portfolio",
    date: "2025-05-01",
    excerpt: "Step-by-step look at building my site with Next.js.",
    content: `# How I Built My Portfolio\n\nFull markdown here ...`
  },
  {
    id:1,
    slug: "debugging-a3c-inference",
    title: "Debugging A3C Inference",
    date: "2025-04-19",
    excerpt: "What to look for when policy loss goes to zero.",
    content: `# Debugging A3C\n\nMore markdown ...`
  }
]
};

export default portfolioData;