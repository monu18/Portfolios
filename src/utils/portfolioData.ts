// src/data/portfolioData.ts

const portfolioData = {
  name: "Jeswyn Jas",
  title: "Data Scientist | Business Analyst",
  location: "Chicago, IL",
  email: "jas.jeswyn@gmail.com",
  phone: "(763) 340-3232",


  profileIntro: "I am a results-driven Data Science Consultant with a passion for turning raw data into actionable insights and scalable solutions. Currently, I partner with the Carlson Analytics Lab at the University of Minnesota to build NLP classifiers that automate the categorization of complex airline safety reports and deploy geospatial clustering models that cut transportation costs by nearly 20%.\n\nBefore academia, I spent two years at Uber designing end-to-end ETL pipelines and leading A/B tests that fueled market expansion across Taiwan and Japan—uncovering $60K in extra revenue and streamlining a $1.2B driver-onboarding funnel. At Fractal Analytics, I honed my forecasting skills through regression models that boosted demand-planning accuracy by 35% and architected dashboards for 50+ global markets, empowering teams with real-time performance metrics.\n\nWith expertise in Python, SQL, Spark, and a breadth of cloud platforms (AWS, Azure, GCP), I thrive on applying advanced machine-learning, statistical modeling, and big-data techniques to solve complex business challenges—whether that’s uncovering hidden trends, optimizing operations, or building robust pipelines for next-generation AI applications.Let’s collaborate to bring your data vision to life.",

  blog:[
    {
      title: "Building a Retrieval-Ready Policy NLP Pipeline",
      intro: "In an age where data-driven decision-making is paramount, the ability to retrieve and analyze policy documents with context-sensitive precision is a game changer. In this post, we delve into building a Retrieval-Ready Policy NLP pipeline tailored for U.S. Name, Image, and Likeness (NIL) laws—leveraging spaCy, Latent Dirichlet Allocation (LDA), Principal Component Analysis (PCA), OpenAI embeddings, and large language models (LLMs). We’ll explore end-to-end design, from raw text ingestion through topic modeling and vector storage, culminating in a Retrieval-Augmented Generation (RAG) prototype that achieves 0.92 Recall@5 when querying NCAA player-week data.",
      image:"blog_1.png"
    },
    {
      title:"Predictive Success Modeling with XGBoost and Nested Cross-Validation",
      intro: "Predicting outcomes is at the heart of modern analytics. Whether you’re forecasting sales, churn rates, or student performance, robust predictive models can drive strategic decision-making. In this deep dive, we explore how to build a predictive success model—specifically targeting candidate performance on standardized assessments—using Python, XGBoost, scikit-learn, pandas, and statsmodels. We’ll cover data ingestion, feature engineering, nested cross-validation for unbiased performance estimation, hyperparameter tuning, and model interpretation.",
      image:"blog_2.png"
    },
    {
      title:"Sentiment Sphere—Real-Time Social Media Sentiment Analysis",
      intro: "In an era where opinions form and propagate at lightning speed across social media, real-time sentiment analysis has become indispensable for brand monitoring, crisis management, and market research. This post outlines the design and implementation of Sentiment Sphere—an end-to-end pipeline harnessing Python, BeautifulSoup, NLTK’s VADER, and API integrations to collect, process, and analyze social media chatter, even tackling informal language and sarcasm.",
      image:"blog_3.png"
    },
    {
      title:"Engineering a Distributed LLM Preprocessing Pipeline on AWS EMR",
      intro: "Preprocessing days-long volumes of raw text—tokenizing, filtering, and preparing for downstream LLM training—demands scalable, distributed architectures. In this post, we explore how to build an end-to-end LLM preprocessing pipeline using Hadoop, Spark, MapReduce, AWS EMR, and Deeplearning4j—processing over 5 GB of mixed-format corpora in under two hours.",
      image:"blog_4.png"
    }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/jeswynjas/",
    github: "https://github.com/Jeswyn",
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
};

export default portfolioData;