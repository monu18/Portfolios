// src/data/portfolioData.ts

const portfolioData = {
  name: "Smruti Vyas Manoj",
  title: "Data Scientist | Business Analyst",
  location: "Chicago, IL",
  email: "ssaurav@buffalo.edu",
  phone: "(763) 340-3232",
  resume:
    "https://drive.google.com/file/d/1Vkqq1EABvLPTaxlWZd5sjdvFLKvnN9M4/view?usp=sharing",

  profileIntro:
    "Crafting resilient healthcare platforms doesn’t begin with code—it begins with empathy for the people whose lives ride on that code. I hold that belief at the center of every sprint. As a Full-Stack Developer with 3 + years in healthcare tech and fast-moving startup environments, I’ve merged Angular and Next.js front-ends with Spring Boot microservices, GraphQL APIs, and PostgreSQL back-ends to deliver end-to-end systems that do more than run—they heal, inform, and scale.\n\nAt Optum, I rebuilt 15 legacy behavioral-health systems into a unified, HIPAA-compliant architecture projected to save $1.4 million annually. I led data-migration efforts with Kafka and GCP, introduced centralized observability with Splunk and Grafana, and earned consecutive 5-star performance reviews for owning outcomes from design to deployment. Earlier, as co-founder of Grojha, I shipped three Flutter apps and a management dashboard that kept 30 + local shops afloat during the pandemic, completing 500 + deliveries in just three months.\n\nMy strength lies in connecting the dots—frontend polish to backend reliability, infrastructure cost to patient impact, technical vision to business value. Now pursuing an M.S. in Computer Science at the University at Buffalo, I’m driven to craft systems that scale compassion as much as computation. If you’re building technology that’s bold, human, and impact-oriented, let’s connect—I’d love to help make it real.",

  projectsMetaData: [
    {
      id: 1,
      title: "Building a Retrieval-Ready Policy NLP Pipeline",
      slug: "retrieval-ready-rolicy-nlp",
      intro:
        "The Retrieval-Ready Policy NLP project is an advanced natural language processing (NLP) initiative developed to efficiently extract, analyze, and utilize U.S. Name, Image, and Likeness (NIL) laws within collegiate athletics. Leveraging cutting-edge NLP techniques and embedding models, this project creates an end-to-end pipeline that enhances the contextual retrieval capabilities of a retrieval-augmented generation (RAG) system. The final implementation achieved a high precision recall of 0.92 (Recall@5), effectively demonstrating robust information retrieval.",
      image: "project_1.jpeg",
    },
    {
      id: 2,
      title:
        "Predictive Success Modeling with XGBoost and Nested Cross-Validation",
      slug: "predictive-success-modeling",
      intro:
        "The Predictive Success Modeling project focuses on developing a robust machine learning model designed to accurately forecast candidate performance outcomes on standardized assessments. Leveraging advanced regression techniques and rigorous evaluation protocols, this predictive model serves as a powerful tool for educational institutions and talent acquisition teams, helping them make informed decisions and optimize candidate selections.",
      image: "project_2.jpeg",
    },
    {
      id: 3,
      title: "Sentiment Sphere—Real-Time Social Media Sentiment Analysis",
      slug: "sentiment-sphere-real-time-sentiment-analysis",
      intro:
        "Sentiment Sphere is an innovative real-time sentiment analysis solution designed to capture and interpret emotional expressions from social media platforms instantly. Using advanced natural language processing (NLP) tools, this pipeline effectively addresses challenges posed by informal language, slang, emojis, and sarcasm commonly found on platforms like Twitter, Reddit, and Facebook. This comprehensive solution provides valuable insights into public opinion and sentiment trends, significantly aiding marketing, customer relations, and crisis management efforts.",
      image: "project_3.jpeg",
    },
    {
      id: 4,
      title: "Engineering a Distributed LLM Preprocessing Pipeline on AWS EMR",
      slug: "llm-preprocessing-pipeline",
      intro:
        "The LLM Preprocessing Pipeline project was developed to efficiently preprocess large-scale textual datasets for training advanced large language models (LLMs). By leveraging distributed computing frameworks such as Hadoop and Apache Spark within Amazon Web Services' Elastic MapReduce (AWS EMR) environment, this pipeline significantly enhanced preprocessing speed and NLP task readiness. The implementation involved generating neural embeddings through JTokkit and Deeplearning4j, achieving a remarkable 40% reduction in data preprocessing time.",
      image: "project_4.jpeg",
    },
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/suman005/",
    github: "https://github.com/madfr0st",
    mail: "https://mail.google.com/mail/u/0/?fs=1&to=ssaurav@buffalo.edu&tf=cm",
  },

  skills: [
    "Python",
    "R",
    "SQL",
    "PySpark",
    "Power BI",
    "Tableau",
    "AWS",
    "A/B Testing",
    "Predictive Modeling",
    "Data Visualization",
    "Statistical Analysis",
  ],
  publications: [
    {
      id: 1,
      slug: "https://ieeexplore.ieee.org/document/8728283",
      title:
        "Effect of Yoga on Hemodynamic Changes at Prefrontal cortex during Sustained Attention Task",
      date: "2025-04-19",
      excerpt:
        "Yoga has been proved to promote relaxation and reduce stress. Recent studies have reported that yoga improves the regional cerebral oxygenation at prefrontal regions. The present study aimed at investigating the changes of hemoglobin changes during attention task in yoga and non-yoga group using functional near infrared spectroscopy technique. Total of ten participants recruited for this study from each group performed visual continuous performance test for six minutes followed by rest. Results show significant increases in oxyhemoglobin concentration (p=0.04) and significant decreases deoxyhemoglobin concentration (p=0.002) levels in participants yoga group compared to the non-yoga group. The lateralization index of the brain shows that activation was more towards at left prefrontal regions in both groups during the task. Results have not shown any significant differences in task performance. The present study concludes that yoga improves regional cerebral oxygenation at prefrontal regions during the attention task.",
    },
    {
      id: 2,
      slug: "https://ijsra.net/content/unlocking-covid-19-patterns-exploring-deep-learning-models-precise-recognition-and",
      title:
        "Unlocking COVID-19 patterns: Exploring deep learning models for precise recognition and classification of CT images",
      date: "2025-04-19",
      excerpt:
        "Coronavirus is a pestilence sickness that truly affects old individuals and patients with persistent illnesses and causes life threatening diseases. Preventing the entire world from this epidemic, quick and accurate detection of COVID-19 plays a crucial role. To contain the advancement of Covid, it is important to build up a dependent and fast technique to recognize the individuals who are influenced and segregate them until full recovery is made. In this study, we introduce a groundbreaking deep CNN model, leveraging the latest advancements in the field, to accomplish precise categorization of COVID-19 CT images. We employ the publicly available HUST-19 dataset, encompassing an impressive collection of 13,980 CT scan images. By harnessing the power of this extensive dataset, our model aims to improve the precision and reliability of COVID-19 classification. In our research, we propose three innovative architectures for deep convolutional neural networks (CNNs), known as AlexNet, Inception V3 and VGG19 models, to get the accurate diagnosis of COVID-19 patients based on images obtained from a CT scan.In order to assess the effectiveness of CNN-based models in a quantitative manner, we employ several key metrics, including Accuracy, Precision, Recall and F-score. The findings of our study indicate that all these three architectures gave remarkable results but InceptionV3 came on the top with testing accuracy of 99.95% with precision, recall and f1-score of 1, 1, and 1 respectively. The results underscore the potential of our suggested method in accurately diagnosing COVID-19 cases utilizing CT scan images.",
    },
  ]
,
  blogMetaData: [
    {
      id: 1,
      slug: "leveraging-vector-databases-for-efficient-customer-ticket-resolution",
      title:
        "Leveraging Vector Databases for Efficient Customer Ticket Resolution",
      date: "2025-04-19",
      excerpt:
        "Effective customer support is crucial for organizations seeking high customer satisfaction, retention, and loyalty. Traditional customer support relies heavily on manual intervention, static FAQs, and basic keyword matching, which often fall short in addressing nuanced customer queries. Vector databases, combined with powerful NLP models and embeddings, offer a transformative approach to automate and enhance customer ticket resolution significantly.",
      content: `# Leveraging Vector Databases for Efficient Customer Ticket Resolution

## Introduction

Effective customer support is crucial for organizations seeking high customer satisfaction, retention, and loyalty. Traditional customer support relies heavily on manual intervention, static FAQs, and basic keyword matching, which often fall short in addressing nuanced customer queries. Vector databases, combined with powerful NLP models and embeddings, offer a transformative approach to automate and enhance customer ticket resolution significantly.

This document explores, in extensive technical depth, the deployment of vector databases in resolving customer support tickets.

#

## Why Vector Databases?

Traditional database querying methods, relying primarily on structured data and keyword-based searches, often struggle with semantic ambiguity, synonym handling, and context identification. Vector databases overcome these limitations by enabling:

###
* Semantic search
* Contextual understanding
* Rapid retrieval of related information
* Improved accuracy in query resolutions

##
## Key Technical Concepts

### 1. Embeddings and Vector Representation

Embeddings are mathematical representations of words, sentences, or documents in high-dimensional spaces that capture semantic meaning.

###
**How it works:**

###
* Pre-trained NLP models like GPT-4, BERT, or SentenceTransformers generate embeddings.
* Embeddings position semantically similar items closer in vector space.

##
### 2. Semantic Search and Similarity Metrics

Vector databases use metrics like cosine similarity, Euclidean distance, or inner product to measure how closely query embeddings match database entries.

###
* **Cosine Similarity:** Most common, measures angle between vectors.
* **Euclidean Distance:** Measures straight-line distance.
* **Inner Product:** Measures alignment of vectors.

#
## Implementing Vector DB in Customer Support Ticket Resolution

Implementing vector databases involves multiple steps detailed below:

##
### Step 1: Data Preparation


Customer support tickets, knowledge bases, FAQs, and past resolutions form the training data.

###
**Tasks:**

* Data extraction and cleaning.
* Categorization and labeling of data for enhanced query handling.

##
### Step 2: Embedding Generation

Using pre-trained NLP models (e.g., Sentence-BERT, OpenAI embeddings API, Hugging Face Transformers):

**Tasks:**

* Convert customer queries, historical tickets, FAQ documents, and knowledge base articles into embeddings.
* Optimize embeddings via fine-tuning NLP models for domain-specific accuracy.

##
### Step 3: Vector Database Integration

Vector databases like Pinecone, Weaviate, Qdrant, or Milvus are integrated.

**Tasks:**

* Embedding indexing.
* Optimization of index parameters (e.g., dimensionality, indexing methods such as HNSW, IVF).
* Setup database architecture for scalability (sharding, replication).

##
### Step 4: Query Handling

Incoming customer tickets are processed:

**Process:**

* Generate embedding for the incoming query.
* Query embedding is matched against database embeddings using similarity metrics.
* Closest matching documents or past resolutions retrieved.

##
### Step 5: Answer Generation and Ticket Resolution

Retrieved information is provided to an LLM to generate detailed, contextual responses.

* LLM processes retrieved context to generate tailored responses.
* Responses delivered to the customer through automated replies or support agents.

#
## Technical Implementation

### Vectorization

Using a typical Python environment:

#

\`\`\`python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

# Embedding example
doc_embedding = model.encode('How do I reset my password?')
\`\`\`

##
### Database Integration Example (Using Qdrant)

\`\`\`python
import qdrant_client
from qdrant_client.http import models

# Connect to Qdrant
client = qdrant_client.QdrantClient(host='localhost', port=6333)

# Create collection
client.create_collection(
    collection_name="customer_support",
    vectors_config=models.VectorParams(size=384, distance=models.Distance.COSINE)
)

# Insert embeddings
doc_embedding = model.encode("To reset your password, follow these steps...")
client.upsert(
    collection_name="customer_support",
    points=[models.PointStruct(id=1, vector=doc_embedding.tolist(), payload={"text": "Password reset guide"})]
)
\`\`\`

##
### Query Handling Example

\`\`\`python
query_embedding = model.encode("I forgot my password")

search_results = client.search(
    collection_name="customer_support",
    query_vector=query_embedding.tolist(),
    limit=3
)

# Display results
for result in search_results:
    print(result.payload["text"])
\`\`\`

#
## Advanced Concepts

### Fine-tuning Embeddings

To improve accuracy, fine-tune models on specific domain datasets:

* Utilize transfer learning on specialized customer support tickets.
* Enhance context sensitivity and semantic accuracy.

##
### Dynamic Updating

To maintain relevance, embeddings are updated dynamically:

* Continuous updating of embeddings with new tickets and resolutions.
* Vector databases enable real-time embedding updates efficiently.

##
### Scalability

Vector databases scale horizontally:

* Implement sharding, replication strategies.
* Distributed architecture for high availability and performance.

#
## Challenges and Solutions

* **Embedding Drift:**

  * Regularly retrain and update models to maintain accuracy.

* **High Dimensionality:**

  * Employ dimensionality reduction techniques (e.g., PCA) if required.

* **Latency and Throughput:**

  * Optimize indexing methods and database configurations.

* **Data Privacy and Security:**

  * Enforce robust security measures, including encryption, authentication, and compliance with data regulations (GDPR, HIPAA).

#
## Measuring Effectiveness

Key metrics:

* Response Accuracy (precision, recall, F1-score)
* Resolution Time
* Customer Satisfaction Scores (CSAT, NPS)

Conduct regular audits and iterative improvements based on these metrics.

#
## Case Study

Consider a hypothetical scenario:

* Initial setup: Support team handles 500 tickets/day manually.
* Post Vector DB integration:

  * Automated resolution rate: 75%.
  * Average ticket resolution time reduced by 70%.
  * Customer satisfaction scores improved by 40%.

#
## Future Trends

* Integration with Generative AI for nuanced response generation.
* Cross-channel ticket handling (social media, chatbots, email).
* Predictive analytics and proactive customer support.

#
## Conclusion

Integrating vector databases into customer support workflows significantly enhances the resolution process, combining speed, accuracy, and context-awareness. By thoroughly understanding the technical underpinnings and following best practices detailed above, organizations can deliver superior customer support experiences, achieving substantial operational efficiency and customer satisfaction improvements.
`,
    },
    {
      id: 2,
      slug: "limitations-of-AI-in-identifying-code-vulnerabilities-and-ensuring-computer-security",
      title: "Limitations of AI in Identifying Code Vulnerabilities and Ensuring Computer Security",
      date: "2024-12-11",
      excerpt: "Artificial Intelligence (AI) has significantly advanced the capabilities of cybersecurity, especially in detecting vulnerabilities and automating security analyses. However, despite remarkable progress, AI-driven vulnerability detection still faces substantial limitations. Understanding these constraints is crucial for effective implementation and realistic expectations of AI systems in cybersecurity.",
      content: `# Limitations of AI in Identifying Code Vulnerabilities and Ensuring Computer Security

## Introduction

Artificial Intelligence (AI) has significantly advanced the capabilities of cybersecurity, especially in detecting vulnerabilities and automating security analyses. However, despite remarkable progress, AI-driven vulnerability detection still faces substantial limitations. Understanding these constraints is crucial for effective implementation and realistic expectations of AI systems in cybersecurity.

This document explores deeply the technical and practical limitations of using AI for identifying code vulnerabilities and enhancing computer security.

#
## Core Limitations of AI in Code Vulnerability Detection

### 1. Quality and Bias in Training Data

AI models heavily rely on extensive datasets for training. In cybersecurity, these datasets often include previously known vulnerabilities, which introduces several issues:

* **Historical Bias**: AI models predominantly learn from known vulnerabilities, potentially missing emerging threats or novel exploit techniques.
* **Imbalanced Data**: Vulnerability datasets are frequently imbalanced, with certain types of vulnerabilities significantly overrepresented, causing models to underperform in detecting rare vulnerabilities.

##
### 2. Detection of Novel and Zero-Day Vulnerabilities

AI-driven tools generally excel at pattern recognition but struggle to detect entirely new vulnerabilities or "zero-day" threats because:

* AI models depend on patterns from historical vulnerabilities.
* Novel vulnerabilities lack prior examples, limiting model effectiveness.

##
### 3. False Positives and Negatives

High rates of false positives and negatives can severely impact operational efficiency:

* **False Positives**: AI systems often flag secure code as vulnerable, wasting resources on unnecessary reviews.
* **False Negatives**: Missing actual vulnerabilities due to incomplete training data or overly restrictive pattern matching.

#
## Technical and Practical Challenges

### 1. Complexity of Software Systems

Modern software systems are complex and layered, involving multiple technologies, libraries, and frameworks:

* AI models may not adequately capture interactions between different system components.
* Dependency chains and configurations can introduce subtle vulnerabilities that AI tools may overlook.

##
### 2. Contextual Understanding

AI models often lack deep semantic understanding and contextual reasoning capabilities:

* Difficulty distinguishing between benign and malicious code snippets when contextual information is crucial.
* Misinterpretation of intended functionality versus vulnerability risks.

##
### 3. Limitations in Static and Dynamic Analysis

* **Static Analysis Limitations**: AI-based static analysis tools can only evaluate code syntactically or structurally, missing runtime and configuration-based vulnerabilities.
* **Dynamic Analysis Limitations**: Dynamic analysis relies heavily on scenarios covered by testing; scenarios not simulated during training or testing may remain undetected.

#
## Limitations in AI Techniques

### 1. Black-box Nature and Interpretability

* AI models, particularly deep neural networks, are "black-box" solutions, lacking transparency:

  * Makes understanding the rationale behind a vulnerability decision challenging.
  * Limits the trust and verification processes necessary for critical security decisions.

##
### 2. Adversarial Attacks

AI systems themselves are vulnerable to adversarial attacks, where malicious actors deliberately manipulate input to evade detection:

* Carefully crafted code can deceive AI models into overlooking vulnerabilities.
* AI model robustness is still an evolving field with ongoing security concerns.

##
### 3. Scalability Issues

* AI-driven tools, particularly resource-intensive neural networks, face scalability challenges:

  * High computational costs associated with processing large-scale software applications.
  * Slows down the deployment process or limits the scope of continuous vulnerability monitoring.

## Ethical and Regulatory Constraints

### 1. Data Privacy and Compliance

* Using sensitive codebases for training AI models introduces compliance and privacy risks:

  * Confidentiality concerns limit the availability of comprehensive training datasets.
  * Regulatory frameworks (e.g., GDPR, HIPAA) impose constraints on data usage, affecting model accuracy.

##
### 2. Accountability and Liability

* Difficulty determining accountability in case of security failures:

  * Ambiguity about who is responsible for vulnerabilities missed or incorrectly flagged by AI systems.
  * Organizations may hesitate to rely solely on AI-driven security tools.

#
## Mitigating Strategies

To address these limitations, organizations often implement:

* **Hybrid Approaches**: Combining AI-driven detection with traditional manual security reviews to balance effectiveness.
* **Continuous Retraining and Updating**: Ensuring AI models evolve with emerging threats by regularly updating training data.
* **Explainable AI (XAI)**: Incorporating interpretable models to enhance transparency and trust.
* **Adversarial Training**: Enhancing robustness of AI models against adversarial manipulations.

#
## Real-World Examples and Case Studies

* Instances where AI-based security tools have missed critical vulnerabilities highlight the importance of human oversight.
* Case studies demonstrating the improvement in accuracy when using hybrid methods compared to AI-only approaches.

#
## Future Prospects

* Enhanced semantic analysis capabilities through advances in Natural Language Processing and Program Understanding.
* Improved transparency through developments in Explainable AI and ethical AI frameworks.
* Greater resilience to adversarial attacks via advanced adversarial robustness techniques.

#
## Conclusion

While AI significantly contributes to identifying vulnerabilities and improving cybersecurity, it is essential to acknowledge its limitations and integrate complementary methods. Understanding these constraints empowers organizations to adopt AI responsibly, strategically combining technological innovations with human expertise to enhance overall security effectiveness.
`,
    },
    {
      id: 3,
      slug: "can-we-reverse-engineer-the-brain-by-analyzing-weights-of-general-purpose-AI-models",
      title: "Can We Reverse Engineer the Brain by Analyzing Weights of General-Purpose AI Models?",
      date: "2024-11-20",
      excerpt: "The concept of understanding human brain functionality by reverse-engineering Artificial Intelligence (AI) models, such as GPT and DeepSeek, is an intriguing intersection of neuroscience, artificial intelligence, and computational theory. Given the fundamental assumption that \"everything is data,\" it is tempting to hypothesize that decoding the weight structures and computations of sophisticated neural networks might offer insights into biological brains.",
      content: `# Can We Reverse Engineer the Brain by Analyzing Weights of General-Purpose AI Models?

## Introduction

The concept of understanding human brain functionality by reverse-engineering Artificial Intelligence (AI) models, such as GPT and DeepSeek, is an intriguing intersection of neuroscience, artificial intelligence, and computational theory. Given the fundamental assumption that "everything is data," it is tempting to hypothesize that decoding the weight structures and computations of sophisticated neural networks might offer insights into biological brains.

This document explores in detail whether analyzing the weights of general-purpose AI models could indeed lead to a deeper understanding of brain functionality.

#
## AI Models and Biological Brains: Similarities and Differences

### Structural Similarities

Both biological brains and artificial neural networks (ANNs) are built upon networks of interconnected processing units (neurons/artificial neurons):

###
* **Neurons vs. Nodes:**

  * Biological neurons: electrochemical processing units.
  * Artificial neurons: mathematical processing units.

###
* **Synapses vs. Weights:**

  * Synaptic connections in the brain adjust based on learning and experience.
  * AI models adjust weights during training via backpropagation or similar algorithms.

##
### Functional Similarities

* Both systems learn and adapt to input data.
* Both encode knowledge and decision-making processes through connections.

###
### Fundamental Differences

###
* **Complexity:**

  * Biological brains have highly heterogeneous and plastic structures.
  * AI models are typically homogeneous, structured, and explicitly engineered.

###
* **Plasticity:**

  * Brains continuously adapt and reorganize structurally and functionally.
  * AI models mostly have fixed architectures post-training.

###
* **Learning Paradigms:**

  * Brains leverage multi-modal, unsupervised, and reinforcement learning.
  * AI models rely heavily on supervised, reinforcement, or unsupervised learning techniques but often less complex in structure.

#
## Technical Feasibility of Reverse Engineering AI Weights

### Analysis of Weights in Large AI Models

###
* **Weight Visualization:**

  * Techniques like PCA, t-SNE, or UMAP reduce high-dimensional weights to interpretable forms.
  * Visualization helps understand learned patterns or concepts but remains abstract and task-specific.

###
* **Interpretability Methods:**

  * Methods like activation mapping, layer-wise relevance propagation, and integrated gradients reveal which input features significantly influence outputs.

##
### Limits of AI Weight Analysis

* **Complexity of Representation:**

  * Billions of parameters (weights) represent complex but abstract mappings between input and output.
  * Little direct insight into how these mappings translate to brain-like cognitive functions.

###
* **Black-box Problem:**

  * AI models typically lack intrinsic explanatory mechanisms for their decisions.
  * Understanding "why" certain patterns emerge in weight distributions remains challenging.

#
## Can AI Model Weights Reveal Brain Functionality?

### Potential Insights


* **Representation Learning:**

  * Studying how models encode concepts in layers might offer parallels to hierarchical processing observed in biological visual cortices.

###
* **Functional Segregation:**

  * Certain layers or neuron groups specialize in particular tasks, resembling how biological brains compartmentalize functions.

##
### Fundamental Challenges

* **Biological Realism:**

  * Biological neurons operate differently from artificial nodes (e.g., spike-timing-dependent plasticity vs. backpropagation).
  * Temporal dynamics and biophysical processes of the brain vastly differ from static AI weights.

###
* **Emergence of Consciousness and Cognition:**

  * Current AI models don't exhibit genuine consciousness, subjective experiences, or qualitative states.
  * Brain functionality includes elements like emotion, self-awareness, and consciousness that are not encoded explicitly or implicitly in AI model weights.

#
## Neuroscience-inspired AI: A More Promising Direction?

Instead of reverse-engineering brain functionality solely from general-purpose AI:

###
* **Biologically Inspired AI:**

  * Implementing models explicitly inspired by biological architectures (e.g., spiking neural networks, neuromorphic computing).

###
* **Hybrid Models:**

  * Combining symbolic and neural approaches for better cognitive modeling.

###
* **Collaborative Models:**

  * Leveraging brain imaging data alongside AI-driven data analysis.

#
## Real-World Case Studies

### Brain Imaging and AI Synergy

* Projects using deep learning to decode fMRI or EEG data have successfully predicted mental states, providing direct neuroscientific insights.

##
### Neural Networks for Modeling Biological Phenomena

* CNN models replicating visual cortex functionality offer limited but valuable insight into hierarchical visual processing.

#
## Future Prospects and Ethical Considerations

* **Neural-Computational Bridges:**

  * Future interdisciplinary research combining neuroscience, AI, and computational modeling may yield deeper insights.

###
* **Ethical Concerns:**

  * Consideration around privacy, cognitive autonomy, and misuse of insights into neural computations.

#
## Conclusion

While analyzing weights from general-purpose AI models can reveal certain aspects of computational learning and representation, significant biological and computational differences limit direct reverse engineering of brain functionality. Instead, neuroscience-inspired AI models and interdisciplinary approaches present a more feasible and productive path toward comprehending brain functions. The intersection of neuroscience and artificial intelligence continues to offer profound opportunities and challenges, demanding cautious yet exploratory scientific endeavors.
`,
    },
    // {
    //   id: 4,
    //   slug: "debugging-a3c-inference-3",
    //   title: "Debugging A3C Inference",
    //   date: "2025-04-19",
    //   excerpt: "What to look for when policy loss goes to zero.",
    //   content: `# Debugging A3C\n\nMore markdown ...`,
    // },
    // {
    //   id: 5,
    //   slug: "debugging-a3c-inference-4",
    //   title: "Debugging A3C Inference",
    //   date: "2025-04-19",
    //   excerpt: "What to look for when policy loss goes to zero.",
    //   content: `# Debugging A3C\n\nMore markdown ...`,
    // },
    {
      id: 6,
      slug: "leveraging-vector-databases-and-large-language-models-(LLMs)-in-modern-organizations",
      title:
        "Leveraging Vector Databases and Large Language Models (LLMs) in Modern Organizations",
      date: "2024-10-01",
      excerpt:
        "In recent years, the integration of Vector Databases (Vector DBs) with Large Language Models (LLMs) has significantly transformed data handling, analytics, and decision-making processes in organizations across various sectors. Vector databases specialize in handling high-dimensional vector embeddings efficiently, making them ideal companions to LLMs. In this comprehensive blog, we’ll explore various practical use cases of Vector DBs combined with LLMs within modern enterprises.",
      content: `# Leveraging Vector Databases and Large Language Models (LLMs) in Modern Organizations

In recent years, the integration of Vector Databases (Vector DBs) with Large Language Models (LLMs) has significantly transformed data handling, analytics, and decision-making processes in organizations across various sectors. Vector databases specialize in handling high-dimensional vector embeddings efficiently, making them ideal companions to LLMs. In this comprehensive blog, we'll explore various practical use cases of Vector DBs combined with LLMs within modern enterprises.

#
## Understanding Vector Databases and LLMs

### Vector Databases

Vector databases store and query vector embeddings efficiently, enabling similarity searches based on semantic meaning rather than textual or numerical equality. Popular examples include Pinecone, Weaviate, Qdrant, and Milvus. They provide high-speed querying of vectorized data, essential for real-time applications involving semantic searches and retrievals.

##
### Large Language Models

LLMs, such as GPT-4, PaLM, and LLaMA, have revolutionized natural language processing by capturing semantic nuances and context. They transform raw textual data into vector embeddings, representing words, sentences, or entire documents as high-dimensional vectors.

Combining these two technologies unlocks powerful capabilities like semantic search, retrieval-augmented generation (RAG), and contextual question-answering.

#
## Detailed Use Cases

### 1. Enhanced Enterprise Search

Traditional keyword-based searches often fail to deliver relevant results due to synonymy, polysemy, and varied phrasing. By integrating vector databases and LLMs, organizations significantly enhance search relevance.

###
**Technical Implementation:**

* **Vectorization:** Documents are converted to embeddings using LLMs.
* **Indexing:** Embeddings are stored in vector DBs.
* **Query Processing:** User queries are vectorized and searched against stored embeddings.

###
**Benefits:**

* Higher search relevance
* Reduced search time
* Improved user satisfaction

##
### 2. Customer Support Automation

Vector DBs combined with LLMs automate customer support interactions by providing contextual, accurate responses.

###
**Technical Implementation:**

* Vectorize FAQ documents and past conversation logs.
* Store embeddings in Vector DB.
* User queries are matched with embeddings to retrieve the most relevant responses.
* LLM generates coherent, personalized replies.

###
**Benefits:**

* 24/7 instant customer support
* Reduced support overhead
* Improved customer satisfaction and retention

##
### 3. Document Analysis and Information Retrieval

Organizations handling extensive documents (contracts, legal files, research papers) leverage vector databases to find relevant insights rapidly.

###
**Technical Implementation:**

* Documents processed by LLMs to produce embeddings.
* Stored embeddings queried using semantic similarity.
* LLM used for summarization, question-answering, and extraction of relevant insights.

###
**Benefits:**

* Accelerated decision-making
* Accurate extraction of critical information
* Efficient knowledge management

##
### 4. Content Recommendation Systems

Vector DBs and LLMs power recommendation engines that deliver highly personalized content based on semantic similarity and user preferences.

###
**Technical Implementation:**

* Content embeddings generated by LLMs.
* User profiles and behavior converted into vectors.
* Vector DB performs similarity searches to match user preferences with content embeddings.

###
**Benefits:**

* Increased user engagement
* Improved content discoverability
* Higher conversion rates

##
### 5. Fraud Detection and Anomaly Identification

Financial institutions and e-commerce platforms use vector databases and LLMs to detect anomalies and fraudulent patterns through semantic pattern recognition.

###
**Technical Implementation:**

* Transaction data transformed into embeddings.
* Vector DBs identify outlier embeddings via similarity searches.
* LLM interprets anomalies contextually.

###
**Benefits:**

* Enhanced fraud detection accuracy
* Real-time anomaly identification
* Improved risk management

##
### 6. Knowledge Base Enrichment and Retrieval-Augmented Generation (RAG)

RAG leverages external knowledge bases stored in vector databases, enhancing LLM-generated content accuracy and reliability.

###
**Technical Implementation:**

* Knowledge base documents converted into embeddings.
* Queries vectorized and searched against stored knowledge.
* Relevant context retrieved and fed into LLM prompt for accurate responses.

###
**Benefits:**

* Improved accuracy of generated responses
* Rich, context-aware answers
* Enhanced reliability in decision-support systems

##
### 7. Intelligent Chatbots and Virtual Assistants

Vector databases and LLMs significantly upgrade chatbot capabilities, enabling nuanced, human-like interactions.

###
**Technical Implementation:**

* Historical conversational data converted into embeddings.
* Vector DB retrieves contextually relevant embeddings.
* LLM generates accurate, conversational replies.
* 
###
**Benefits:**

* Human-like interactions
* Increased customer engagement
* Reduction in human intervention costs

##
### 8. Sentiment Analysis and Opinion Mining

Organizations use vector DBs and LLMs to understand customer sentiment accurately and contextually across various communication channels.

###
**Technical Implementation:**

* Social media, reviews, and communications vectorized.
* Sentiment embeddings indexed in vector DB.
* Real-time semantic sentiment analysis performed via similarity searches.

###
**Benefits:**

* Real-time sentiment tracking
* Detailed customer insights
* Proactive customer relationship management

#
## Technical Considerations and Best Practices

* **Embedding Generation:** Choose appropriate embedding models and techniques (fine-tuning models for specific domains).
* **Indexing Strategy:** Optimize vector indexing based on data dimensionality and query patterns.
* **Scalability:** Employ sharding and replication techniques provided by modern vector DBs for high scalability.
* **Security and Compliance:** Ensure sensitive data is protected and complies with organizational security protocols.

#
## Challenges and Mitigation Strategies

* **Embedding Drift:** Regularly update embeddings to maintain accuracy and relevance.
* **High Dimensionality Issues:** Apply dimensionality reduction techniques like PCA, or opt for advanced indexing methods (HNSW, IVF).
* **Performance Tuning:** Continuously monitor and tune vector database parameters and embedding quality.

#
## Conclusion

The synergy of Vector Databases and Large Language Models offers vast potential for transforming data management and operational processes in modern organizations. Implemented correctly, these technologies deliver profound enhancements in accuracy, speed, and user satisfaction across diverse business applications. By understanding the technical foundations and practical implementations detailed above, organizations can strategically leverage these technologies to achieve sustained competitive advantages.
`,
    },
     {
      id: 7,
      slug: "My-Transformative-Journey-at-Optum",
      title: "My Transformative Journey at Optum: Bridging Health Tech and Global Impact",
      date: "Published: August 2024",
      excerpt: "When I reflect on my professional journey, my time at Optum stands out as a period of immense growth, learning, and impactful contributions. Joining Optum, a subsidiary of the renowned UnitedHealth Group, was a pivotal decision that aligned perfectly with my passion for leveraging technology to enhance healthcare. This blog delves into my enriching experience at Optum, highlighting the projects I undertook, the challenges I overcame, and the invaluable lessons I learned along the way.",
      content: `# My Transformative Journey at Optum: Bridging Health Tech and Global Impact


When I reflect on my professional journey, my time at Optum stands out as a period of immense growth, learning, and impactful contributions. Joining Optum, a subsidiary of the renowned UnitedHealth Group, was a pivotal decision that aligned perfectly with my passion for leveraging technology to enhance healthcare. This blog delves into my enriching experience at Optum, highlighting the projects I undertook, the challenges I overcame, and the invaluable lessons I learned along the way.

#
## Embarking on a Mission: Joining Optum

After successfully navigating the entrepreneurial venture of Grojha, a startup aimed at supporting local shopkeepers during the COVID-19 pandemic, I realized my true calling lay in the intersection of technology and healthcare. The experience with Grojha ignited a desire to contribute to a larger, more structured environment where my skills could drive significant global impact. This realization led me to Optum, where I envisioned the opportunity to work on large-scale, sustainable health tech solutions that could transform lives.

Joining Optum in December 2021 as a Software Engineer was more than just a career move; it was the beginning of a mission to revolutionize behavioral health technology. My goal was clear: to apply my technical expertise to create meaningful solutions that address real-world health challenges, ultimately improving the quality of life for individuals worldwide.

#
## Diving into High-Impact Projects

From day one, I was immersed in high-stakes projects that aimed to replace outdated technologies and significantly reduce operational costs. One of the flagship projects I worked on was designed to provide crucial data to individuals suffering from behavioral health issues. This included comprehensive details about psychiatrists, insurance coverage, and various benefits available to them.

##
### Developing Essential UI Components

In my role, I was responsible for developing several key UI components that were pivotal to the project's success. This included HIPAA-compliant features, an announcement dashboard, and a robust provider search and filtering system. Ensuring HIPAA compliance was no small feat, as it required meticulous attention to detail to protect sensitive health information while maintaining an intuitive user experience.

##
### Backend API Development

Beyond the front-end, I played a significant role in creating backend APIs using Spring Boot and GraphQL. These APIs facilitated functionalities like SMS notifications, data migration, and master event capturing. One of my notable contributions was developing APIs for SMS functionality, which enabled seamless communication between the platform and its users, enhancing the overall user engagement and support system.

##
### Migrating Kafka Topics to GCP

A major highlight of my tenure was successfully migrating Kafka topics from Azure to the Google Cloud Platform (GCP). This migration was critical for improving the scalability and reliability of our data processing capabilities. Undertaking this task single-handedly required a deep understanding of both Azure and GCP environments, as well as expertise in Kafka. The successful migration not only earned me "bravos" from my team but also showcased my ability to manage complex technical challenges effectively.

#
## Collaborating in a Diverse, Global Team

One of the most enriching aspects of working at Optum was the opportunity to collaborate with a diverse team comprising members from the United States and India. This global exposure emphasized the importance of diversity and inclusivity in driving innovation. Working alongside professionals from different cultural and technical backgrounds broadened my perspective and enhanced my ability to communicate and collaborate effectively across borders.

##
### Cultural Synergy

The synergy created by our diverse team was palpable. Each member brought unique insights and approaches to problem-solving, fostering an environment where creativity and innovation thrived. This cultural diversity not only enriched our work dynamics but also enabled us to develop solutions that were more comprehensive and adaptable to various user needs.

##
### Effective Communication

Effective communication was paramount in ensuring the smooth execution of our projects. Regular virtual meetings, collaborative tools, and a shared commitment to our mission facilitated seamless coordination. This experience honed my ability to articulate complex technical concepts clearly and work cohesively with a team to achieve our shared goals.

#
## Achieving Excellence: Consistent 5-Star Ratings

At Optum, excellence is not just a goal; it's a standard. My dedication to delivering high-quality work was consistently recognized through 5-star ratings in every quarterly review. These ratings were a testament to my unwavering commitment to taking ownership of my projects and implementing precise technical solutions.

##
### Commitment to Quality

Maintaining high standards of quality was integral to my role. Whether it was developing a new feature or troubleshooting an issue, I approached every task with meticulous attention to detail. This commitment ensured that our solutions were not only functional but also reliable and user-friendly.

##
### Recognition and Motivation

Receiving consistent 5-star ratings was incredibly motivating. It reinforced my belief in the value of my contributions and inspired me to strive for even greater heights. This recognition also highlighted the supportive and appreciative culture at Optum, where hard work and dedication are acknowledged and celebrated.

#
## Overcoming Challenges: Time Management and Learning Curves

No journey is without its challenges, and my time at Optum was no exception. One of the primary challenges was managing a tight schedule to transition from old technology to new technology. The legacy systems were being decommissioned rapidly, necessitating swift and efficient migration to ensure continuity of service.

##
### Balancing Work and Personal Life

Balancing the demands of a high-pressure project with personal life was a significant challenge. The urgency to meet deadlines often required long hours and intense focus. However, through effective time management and prioritization, I was able to maintain a healthy work-life balance without compromising on the quality of my work.

##
### Steep Learning Curve

The transition to new technologies like Spring Boot and GraphQL introduced a steep learning curve. However, this challenge was also an opportunity for growth. I immersed myself in learning these technologies, leveraging online resources, documentation, and peer support to quickly acquire the necessary skills. This experience not only enhanced my technical proficiency but also reinforced the importance of continuous learning in the ever-evolving tech landscape.

#
## Making a Tangible Impact: Reducing Operational Costs and Enhancing User Experience

The projects I worked on at Optum were not just about implementing new features; they were about making a tangible impact on the organization's efficiency and the user experience.

##
### Cost Reduction

One of the project's primary objectives was to reduce operational costs. Through the consolidation of legacy systems and the implementation of more efficient technologies, our project aimed to cut annual operational costs by $1.4 million. This significant cost saving was achieved by streamlining processes, reducing redundancies, and enhancing the overall efficiency of our systems.

##
### Enhancing User Experience

Simplifying the user experience for operations teams was another critical goal. By developing intuitive UI components and robust backend APIs, we enabled operations teams to access and manage behavioral health information more efficiently. Features like the provider search and filtering system allowed for quick access to essential information, reducing call handling time and improving overall service delivery.

#
## Learning and Growing: Personal and Professional Development

My journey at Optum was not just about professional achievements; it was also a period of substantial personal growth.

##
### Time Management Skills

Managing multiple high-impact projects under tight deadlines taught me the importance of effective time management. Prioritizing tasks, setting realistic goals, and maintaining focus were crucial in ensuring that I met project deadlines without compromising on quality.

##
### Technical Proficiency

Working with a diverse tech stack, including Angular, Spring Boot, Kafka, GraphQL, DBMS, Jenkins, and Git, significantly enhanced my technical proficiency. Each project provided an opportunity to delve deeper into these technologies, understand their intricacies, and apply them to solve complex problems.

##
### Adaptability and Resilience

Navigating the challenges of transitioning to new technologies and balancing work-life demands fostered adaptability and resilience. These experiences equipped me with the ability to remain calm and effective in high-pressure situations, a skill that is invaluable in any professional setting.

#
## Looking Ahead: Aspiring for a Sustainable Health Tech Future

My time at Optum has solidified my commitment to the health technology sector. The impactful projects, the collaborative environment, and the continuous learning opportunities have all contributed to my desire to further explore and innovate in this field.

##
### Short-Term Goals

In the short term, I aim to deepen my technical knowledge and continue contributing to high-impact projects at Optum. I seek to take on more leadership roles within my team, driving projects that not only meet organizational goals but also set new industry standards.

##
### Long-Term Aspirations

Looking ahead, my long-term goal is to establish a sustainable health tech venture that addresses pressing healthcare challenges. Inspired by my experiences at Optum and Grojha, I envision creating solutions that bridge the gap between technology and healthcare, making a meaningful difference in people's lives.

##
### Ph.D. Ambitions

To further my expertise and contribute to cutting-edge research, I am eager to pursue a Ph.D. in Computer Science, focusing on Health Technology. This advanced study will enable me to explore areas such as artificial intelligence in medical diagnosis, health data analytics, and the development of innovative technologies that enhance healthcare delivery.

#
## Conclusion: A Journey of Impact and Innovation

My journey at Optum has been a transformative experience, marked by significant achievements, valuable lessons, and a reinforced commitment to health technology. From developing essential UI components and backend APIs to successfully migrating complex data systems, each project has contributed to my growth as a software engineer and a problem solver.

Working at Optum has not only allowed me to apply my technical skills to impactful projects but has also provided me with the platform to collaborate with a diverse, global team. The recognition and accolades I received, coupled with the challenges I overcame, have equipped me with the skills and confidence to pursue my aspirations in the health tech sector.

As I look to the future, I am excited about the possibilities that lie ahead. With a solid foundation built at Optum, I am determined to continue leveraging technology to address real-world health challenges, ultimately contributing to a healthier, more efficient healthcare system for all.

#
---
###

*This blog post reflects my personal experience and professional journey at Optum. The views expressed are my own and do not necessarily represent those of Optum or UnitedHealth Group.*`,
    },
    {
      id: 8,
      slug: "Building-Grojha",
      title: "Building Grojha: A Startup Journey Fueled by Innovation and Community Spirit",
      date: "Published: December 2021",
      excerpt: "In the midst of a global pandemic, when the world stood still and businesses grappled with unprecedented challenges, I embarked on a journey that would not only test my technical prowess but also ignite my entrepreneurial spirit. This is the story of Grojha, a startup I co-founded to support local shopkeepers in Kolkata, India, during the COVID-19 pandemic. Grojha was more than just a business venture; it was a mission to bridge the gap between small-scale vendors and consumers, ensuring that essential goods remained accessible while maintaining safety and minimizing physical contact.",
      content: `# Building Grojha: A Startup Journey Fueled by Innovation and Community Spirit


In the midst of a global pandemic, when the world stood still and businesses grappled with unprecedented challenges, I embarked on a journey that would not only test my technical prowess but also ignite my entrepreneurial spirit. This is the story of Grojha, a startup I co-founded to support local shopkeepers in Kolkata, India, during the COVID-19 pandemic. Grojha was more than just a business venture; it was a mission to bridge the gap between small-scale vendors and consumers, ensuring that essential goods remained accessible while maintaining safety and minimizing physical contact.

#
## The Genesis of Grojha: Recognizing a Community Need

The year 2021 was a tumultuous time. The COVID-19 pandemic had wreaked havoc on economies worldwide, and Kolkata was no exception. Small-scale shopkeepers, who form the backbone of the local economy, were among the hardest hit. A close friend of mine, who owned a grocery shop in Calcutta, faced severe setbacks due to lockdown measures and mobility restrictions. Observing his struggles, I realized that traditional business models were insufficient in addressing the new reality. There was an urgent need for a solution that could keep businesses afloat while ensuring that consumers could access essential goods without exposing themselves to health risks.

This realization sparked the idea of Grojha, a digital platform designed to unite local shops and their products through mobile applications. The goal was simple yet ambitious: create a seamless, contactless shopping experience that benefited both shopkeepers and consumers during one of the most challenging periods in recent history.

#
## Turning Vision into Reality: The Birth of Grojha

With a clear vision in mind, I teamed up with my friend to bring Grojha to life. As the technical architect, my responsibilities encompassed every aspect of the startup's technological framework. Despite coming from a middle-class family where access to a personal computer was limited, my passion for technology and problem-solving drove me to dedicate countless hours in the school's computer lab, honing my skills in programming and software development.

##
### Key Steps in Developing Grojha

#### Defining the Tech Stack

Choosing the right technologies was crucial for the success of Grojha. We opted for:

###
- **Flutter**: For developing cross-platform mobile applications, ensuring a consistent user experience across both Android and iOS devices
###
- **Firebase**: To handle backend services, including real-time databases, authentication, and cloud storage
###
- **Adobe Illustrator**: For designing intuitive and user-friendly interfaces
###
- **Android Development**: To ensure the apps were optimized for Android users, who form a significant portion of our target audience
###
- **Web Development**: To create a comprehensive management dashboard for shopkeepers and delivery partners

###
#### Developing the Applications

Within three months, I successfully developed three distinct mobile applications and one management dashboard:

###
- **Grojha**: The primary app for consumers to browse and purchase products from local shops
###
- **Grojha Retails**: An app tailored for shopkeepers to list and manage their products
###
- **Delivery Partner App**: To facilitate the logistics of order deliveries
###
- **Management Dashboard**: A web-based tool for tracking orders, managing inventories, and overseeing delivery operations

###
#### Launching on the Google Play Store

Deploying the applications to the Google Play Store was a significant milestone. Despite the challenges posed by the pandemic, we managed to get "Grojha" and "Grojha Retails" live, attracting a growing user base almost immediately.

#
## Impact and Achievements: Making a Difference in a Short Span

The response to Grojha was overwhelming. Within just three months of launch, we achieved remarkable milestones:

###
- **Onboarding Local Shops**: We partnered with over 30 local shops, including grocery stores, vegetable vendors, fruit stands, and paan shops, creating a robust network that could cater to diverse consumer needs
###
- **User Adoption**: Our applications garnered over 100 active users for "Grojha" and 50 active users for "Grojha Retails," reflecting the trust and reliance that consumers and shopkeepers placed in our platform
###
- **Deliveries**: Completing more than 500 deliveries within a 5-mile radius demonstrated our ability to manage logistics effectively and meet the urgent demands of the community
###
- **Revenue Generation**: By implementing a delivery charge of ₹20 per order, we generated significant revenue that not only sustained our operations but also provided a financial cushion during the challenging times

#
## Overcoming Challenges: Lessons in Resilience and Innovation

Starting a business during a pandemic was fraught with obstacles, but each challenge was a learning opportunity that strengthened our resolve and refined our strategies.

##
### Mapping and Managing Products

**Challenge**: Adding over 1,000 products for some shops was a daunting task, especially with limited backend capabilities.

###
**Solution**: I introduced backend functionalities that allowed for the automatic addition of products during the account creation process. This streamlined the onboarding process for shopkeepers, enabling them to list their products efficiently without overwhelming manual input.

##
### Dynamic Pricing and Order Management

**Challenge**: Rapidly fluctuating product prices and the need for timely updates posed a significant hurdle. Shopkeepers often forgot to update prices, leading to discrepancies and customer dissatisfaction.

###
**Solution**: I implemented a feature that allowed shopkeepers to edit prices after an order was placed. Users could approve the updated prices before finalizing their orders, ensuring transparency and accuracy in transactions.

##
### Licensing and Regulatory Compliance

**Challenge**: Obtaining the necessary licenses to operate during complete lockdown was a major setback. Regulatory hurdles, coupled with the novel nature of our business model, made it difficult to secure the required approvals.

###
**Solution**: Despite our best efforts, the lack of funding and investor interest in such a novel idea led to slow growth. Ultimately, I had to hand over the project to my friend to support myself financially. This experience underscored the importance of securing adequate funding and understanding regulatory landscapes before scaling a startup.

##
### Economic Slowdown and Investment Shortfalls

**Challenge**: The economic downturn and reluctance of investors to fund innovative yet unproven ideas resulted in limited growth opportunities for Grojha.

###
**Solution**: This challenge taught me invaluable lessons in resilience, adaptability, and the critical importance of securing a robust financial foundation before attempting to scale a startup.

#
## Technological Excellence: Leveraging Cutting-Edge Tools for Seamless Operations

The success of Grojha was largely attributable to the strategic use of advanced technologies and frameworks, which facilitated the seamless operation of our applications and backend systems.

###
- **Flutter**: Enabled us to develop high-quality, cross-platform mobile applications efficiently, ensuring a consistent user experience across different devices
###
- **Firebase**: Provided reliable backend services, including real-time databases, user authentication, and cloud storage, which were essential for managing data and user interactions
###
- **Adobe Illustrator**: Allowed us to design intuitive and visually appealing interfaces, enhancing user engagement and satisfaction
###
- **Android Development**: Ensured that our applications were optimized for the Android ecosystem, which is particularly important given the large user base in India
###
- **Web Development**: The management dashboard facilitated real-time monitoring of orders, inventory, and deliveries, enabling shopkeepers and delivery partners to manage their operations effectively

#
## Community and Collaboration: Building a Supportive Ecosystem

Grojha was not just about technology; it was about fostering a sense of community and collaboration among local shopkeepers and consumers. By creating a platform that connected these stakeholders, we were able to build a supportive ecosystem that thrived even in the face of adversity.

###
- **Empowering Local Businesses**: By providing shopkeepers with a digital platform to showcase their products, we helped them reach a broader audience and sustain their businesses during the lockdown
###
- **Enhancing Consumer Convenience**: Consumers benefited from the ability to purchase essential goods without leaving the safety of their homes, reducing their exposure to health risks
###
- **Streamlining Deliveries**: The delivery partner app ensured that orders were fulfilled efficiently, maintaining the delicate balance between supply and demand during a crisis

#
## Personal Growth and Professional Development: Lessons Learned

The journey with Grojha was as much about personal growth as it was about professional achievement. Navigating the complexities of a startup environment during a pandemic taught me invaluable lessons that continue to shape my approach to problem-solving, project management, and leadership.

##
### Technical Skills Enhancement

Developing multiple applications from scratch honed my skills in Flutter, Firebase, Android development, and web development. It also deepened my understanding of backend systems and database management.

##
### Entrepreneurial Mindset

Leading a startup instilled in me the importance of adaptability, innovation, and resilience. I learned to pivot strategies in response to unforeseen challenges and to stay committed to my vision despite setbacks.

##
### Project Management

Coordinating the development and deployment of multiple applications within a tight timeframe taught me effective time management, prioritization, and the ability to work under pressure.

##
### User-Centric Design

Ensuring that our applications met the needs and expectations of both shopkeepers and consumers emphasized the importance of user-centric design. It reinforced the value of empathy and understanding user behavior in creating successful products.

##
### Collaboration and Teamwork

Working closely with my friend and other stakeholders highlighted the importance of collaboration and clear communication in achieving common goals. It underscored the value of diverse perspectives in driving innovation.

#
## Transitioning from Grojha to Optum: Continuing the Mission

While Grojha provided a platform to apply my technical skills and address real-world challenges, it also highlighted the limitations of operating on a local scale without sufficient funding and regulatory support. The experience with Grojha was instrumental in shaping my decision to join Optum, a subsidiary of the UnitedHealth Group, where I could leverage my skills to make a more significant and sustainable impact on a global scale.

##
### Key Takeaways from Grojha

- **Importance of Scalability**: Grojha taught me that while local impact is meaningful, scaling solutions requires robust infrastructure, funding, and strategic planning
###
- **Regulatory Acumen**: Navigating licensing and compliance issues underscored the necessity of understanding regulatory frameworks, especially in the health tech sector
###
- **Financial Planning**: The challenges in securing investment highlighted the critical role of financial planning and securing adequate funding for startup growth

#
## Conclusion: A Journey of Innovation, Community, and Learning

The journey of Grojha was a testament to the power of innovation and the impact of technology in addressing societal challenges. From conceptualizing a digital platform to supporting local shopkeepers and consumers during a crisis, Grojha embodied the spirit of community-driven innovation. Despite the inevitable hurdles and the eventual closure of the startup, the experience was profoundly enriching, equipping me with the skills, insights, and resilience needed to pursue larger, more impactful endeavors in the health tech sector.

As I continue my professional journey at Optum and pursue further education in Computer Science, the lessons learned from Grojha remain invaluable. They fuel my passion for developing sustainable, technology-driven solutions that bridge gaps in healthcare and enhance the quality of life for individuals worldwide. Grojha was not just a startup; it was the foundation upon which I built my commitment to making a lasting, positive impact through technology.

#
---
###

*This blog post reflects my personal entrepreneurial journey and the lessons learned from building Grojha during the COVID-19 pandemic. The experiences and insights shared are based on my own perspective and do not represent any official position or endorsement.*`,
    },
    {
      id: 9,
      slug: "My-Transformative-Journey-at-NIT-Raipur",
      title: "My Transformative Journey at NIT Raipur: From Biomedical Engineering to Health Tech Innovator",
      date: "Published: June 2021",
      excerpt: "Embarking on the journey of higher education is akin to setting sail on uncharted waters—filled with opportunities, challenges, and the promise of personal and professional growth. For me, National Institute of Technology Raipur (NIT Raipur) was not just an academic institution; it was the crucible where my passion for technology and healthcare fused, shaping me into the innovative problem-solver I am today. This is the story of my transformative journey at NIT Raipur, a journey marked by a relentless pursuit of knowledge, groundbreaking projects, and a deep-seated commitment to leveraging technology for societal betterment.",
      content: `# My Transformative Journey at NIT Raipur: From Biomedical Engineering to Health Tech Innovator


Embarking on the journey of higher education is akin to setting sail on uncharted waters—filled with opportunities, challenges, and the promise of personal and professional growth. For me, National Institute of Technology Raipur (NIT Raipur) was not just an academic institution; it was the crucible where my passion for technology and healthcare fused, shaping me into the innovative problem-solver I am today. This is the story of my transformative journey at NIT Raipur, a journey marked by a relentless pursuit of knowledge, groundbreaking projects, and a deep-seated commitment to leveraging technology for societal betterment.

#
## Early Inspirations: The Spark That Ignited My Passion

My journey at NIT Raipur began with a personal experience that left an indelible mark on my aspirations. As a 10-year-old, I suffered a broken hand, an incident that introduced me to the critical role of technology in healthcare. Watching a doctor struggle to accurately diagnose and treat my injury due to inadequate health tech equipment was a pivotal moment. This experience ignited a passion within me to explore how technology could revolutionize the healthcare industry, making it more efficient, accurate, and accessible.

Despite coming from a middle-class family that couldn't afford a personal computer, my determination led me to spend countless hours in the school's computer lab. There, I delved into research on the intersection of technology and healthcare, laying the groundwork for my future endeavors. This early fascination with health tech was the catalyst that guided me toward pursuing a Bachelor's degree in Biomedical Engineering at NIT Raipur, a college renowned for its contributions to health technology.

#
## Academic Excellence and Competitive Programming: Building a Strong Foundation

NIT Raipur provided the perfect environment to nurture my academic and technical skills. The rigorous curriculum in Biomedical Engineering was complemented by opportunities to engage in extracurricular activities that honed my problem-solving abilities. One of the most memorable experiences during my first year was being introduced to competitive programming by a friend. This exposure unveiled the immense potential of programming in biomedical engineering, demonstrating how computational solutions could address complex health-related challenges.

Inspired by this revelation, I immersed myself in competitive programming, consistently ranking among the top 1% of programmers at my college. This achievement was not just a testament to my coding skills but also a reflection of my commitment to applying these skills to meaningful, real-world applications. The combination of Biomedical Engineering and Computer Science became the cornerstone of my academic journey, preparing me for the multifaceted challenges in health tech.

#
## Key Projects: Turning Ideas into Impactful Solutions

My time at NIT Raipur was punctuated by several projects that allowed me to apply my technical knowledge to practical problems. Among these, two projects stand out for their impact and the lessons they imparted: the COVID-19 Tracking App and Grojha, a community-driven grocery app.

##
### COVID-19 Tracking App: Enhancing Public Safety

During the 8th semester, I undertook a major project that addressed a critical need during the COVID-19 pandemic. The goal was to develop an Android app that could track and store a person's movement data for 21 days, notifying users if they had visited any high-alert zones. This project was not just an academic requirement; it was a mission to enhance public safety by enabling informed decision-making during a health crisis.

###
#### Challenges and Solutions

###
**Mapping Red-Alert Zones**: Utilizing the Google Maps API posed a significant challenge due to its cost. To overcome this, I devised a creative workaround by capturing screenshots and manually marking red-alert zones, ensuring precise mapping of coordinates.
###

**Privacy Concerns**: Handling sensitive user data required stringent privacy measures. With the support of my professors, I navigated these concerns, though the app remained in development to prevent potential privacy breaches.

###
#### Impact and Learnings
###
The COVID-19 Tracking App was lauded by my professors as one of my most innovative projects. Their encouragement motivated me to transition this academic project into a real-world application, setting the stage for my next venture, Grojha.

##
### Grojha: Empowering Local Shopkeepers During a Pandemic

The pandemic underscored the vulnerability of small-scale businesses. Witnessing a friend's grocery business suffer due to lockdowns inspired me to create Grojha, a digital platform connecting local shopkeepers with consumers. As the technical architect, I spearheaded the development of three mobile apps and a management dashboard using Flutter, Firebase, Adobe Illustrator, Android development, and web development.

###
#### Achievements

###
- **Rapid Development and Deployment**: Within three months, I developed and launched 'Grojha' and 'Grojha Retails' on the Google Play Store, attracting over 30 local shops and 150 users
###
- **Efficient Deliveries**: We successfully completed over 500 deliveries within a 5-mile radius, providing essential goods to consumers while supporting shopkeepers
###
- **User-Centric Features**: Implemented features like automatic product addition during account creation and dynamic pricing updates to streamline operations and enhance user experience

###
#### Challenges and Resilience

###
- **Scalability**: Managing a vast inventory of products required innovative backend solutions, leading me to introduce automated product addition features
###
- **Regulatory Hurdles**: Securing necessary licenses amid lockdown restrictions proved difficult, highlighting the importance of regulatory compliance in scaling a startup
###
- **Funding Shortfalls**: Despite the app's potential, lack of investor interest and funding hindered growth, eventually leading to the project's closure. This experience imparted valuable lessons in resilience, adaptability, and the critical role of financial planning in entrepreneurial ventures

#
## Hackathons and Competitions: Sharpening Skills Under Pressure

Participating in hackathons was a significant aspect of my journey at NIT Raipur. These competitions were arenas of intense creativity and rapid problem-solving, pushing me to apply my knowledge under pressure. One notable project was the Ambulance and Blood Bank App, developed during a hackathon in February 2020.

##
### Ambulance and Blood Bank App: A Comprehensive Emergency Resource

- **Purpose**: The app provided users with information about nearby ambulances, facilitated ambulance booking, and offered details on blood availability from nearby blood banks
###
- **Technologies Used**: Google Maps API, Firebase, Android development
###
- **Achievements**: Secured the runner-up position in the hackathon, showcasing the app's effectiveness in emergency scenarios

###
#### Challenges and Learnings
###
- **Time Constraints**: Developing the Google Maps integration within a 24-hour timeframe was daunting, teaching me valuable time management and rapid development skills
###
- **Innovation Under Pressure**: The necessity to constantly refine ideas and implementations to stay ahead of competitors fostered a mindset of continuous improvement and innovation

#
## Research and Publications: Bridging Health and Technology

My academic journey was not confined to projects and competitions; it also involved significant research contributions that bridged the gap between health and technology.

##
### 1. Effect of Yoga on Hemodynamic Changes at Prefrontal Cortex during Sustained Attention Task (IEEE)

- **Objective**: Explore the intersection of health and technology by examining how yoga affects cognitive functions
###
- **Findings**: Individuals practicing yoga exhibited higher oxygen concentration levels in the prefrontal cortex during attention-intensive tasks, compared to non-practitioners
###
- **Technical Contribution**: Developed a Java-based software to process vast amounts of data from Functional Near-Infrared Spectroscopy (FNIR), enhancing research accuracy and efficiency by eliminating human errors
##

### 2. Unlocking COVID-19 Patterns: Exploring Deep Learning Models for Precise Recognition and Classification of CT Images (IJSRA)

###
- **Objective**: Improve COVID-19 classification precision using deep convolutional neural networks (CNNs)
###
- **Findings**: Introduced three innovative CNN architectures, with InceptionV3 achieving an impressive 99.95% accuracy using the HUST-19 dataset, underscoring the potential of CT scan-based diagnosis for COVID-19
###
- **Technical Contribution**: Leveraged deep learning models to enhance diagnostic accuracy, demonstrating the profound impact of artificial intelligence in healthcare

#
## Extracurricular Activities: Fostering a Spirit of Innovation and Community Engagement

Beyond academics and projects, my time at NIT Raipur was enriched by active participation in extracurricular activities that fostered innovation, leadership, and community engagement.

##
### Entrepreneurship Cell: Promoting Startup Culture

As an executive member of the Entrepreneurship Cell, I played a pivotal role in organizing events and workshops that encouraged a startup mindset among students. Planning and executing over 15 startup events and workshops not only honed my organizational and leadership skills but also fostered a collaborative environment where ideas could flourish.

##
### Coding Club: Turing Club of Programmers

Leading the Turing Club of Programmers, I provided guidance to students in data structures, algorithms, and logical reasoning. This role was instrumental in reinforcing my own knowledge while mentoring others, cultivating a culture of continuous learning and problem-solving.

##
### Competitive Programming: Excelling in Coding Competitions

My passion for competitive programming was reflected in my participation on platforms like CodeChef, Codeforces, and SPOJ, where I solved over 2,000 problems. Achieving a Yellow (five stars) rating on CodeChef and reaching an expert level on Codeforces underscored my dedication and proficiency in programming. These competitions sharpened my algorithmic thinking and efficiency, skills that were invaluable in my projects and professional roles.

##
### Hackathon Success: Runner-Up in Codeutsava-2.0

Securing second place out of 105 teams in the Codeutsava-2.0 hackathon hosted by NIT Raipur was a testament to my ability to innovate and perform under pressure. This achievement not only bolstered my confidence but also highlighted the collaborative and competitive spirit fostered at NIT Raipur.

#
## Personal Growth: Balancing Academics, Projects, and Personal Interests

While my academic and professional pursuits were demanding, I also made time for personal interests and community activities that provided a well-rounded experience.

##
### Hobbies: Nurturing Creativity and Leisure

- **Painting**: An avid painter, I found solace and creativity in art. Painting not only served as a therapeutic outlet but also enhanced my attention to detail and aesthetic sense, which translated into my technical projects
###
- **Motorcycle Riding**: Riding motorcycles offered an exhilarating escape, teaching me discipline, focus, and the importance of safety—traits that are essential in both personal and professional settings
###
- **Esports Gaming**: Engaging in competitive games like CS:GO and Valorant sharpened my strategic thinking and teamwork skills, mirroring the collaborative nature of software development

##
### Social Activities: Giving Back to the Community

As an executive member of the Magadh Mission Foundation, an NGO dedicated to providing education to underprivileged children, I took on the responsibility of developing the organization's website to enhance its online presence. This initiative not only expanded my web development skills but also reinforced my commitment to social responsibility.

Additionally, I mentored college students and new recruits, sharing my knowledge and experiences to help them navigate their academic and professional journeys. These mentorship roles honed my leadership and communication skills, preparing me for future roles that require guiding and inspiring others.

#
## Achievements and Recognitions: Celebrating Milestones

My tenure at NIT Raipur was marked by numerous achievements that reflected my dedication and excellence:

###
- **Regional Math and Science Olympiads**: Winning medals in regional competitions underscored my strong analytical and problem-solving abilities from a young age
###
- **Top 1% Programmer**: Consistently ranking in the top 1% of programmers in my college highlighted my proficiency and commitment to mastering programming skills
###
- **Research Publications**: Publishing research papers in esteemed journals like IEEE and IJSRA demonstrated my ability to contribute meaningful knowledge to the field of health tech

#
## Transitioning from NIT Raipur: Bridging Education and Professional Aspirations

Graduating from NIT Raipur with a Bachelor's degree in Biomedical Engineering, I carried forward the lessons and experiences that shaped my academic journey into my professional career and entrepreneurial ventures.

##
### From Academia to Entrepreneurship

The success of my projects and the skills acquired during my time at NIT Raipur laid the foundation for launching Grojha. The blend of technical expertise, problem-solving abilities, and entrepreneurial mindset gained from NIT Raipur was instrumental in navigating the challenges of starting a business during a pandemic.

##
### Pursuing Higher Education

My experiences at NIT Raipur also fueled my aspiration to pursue a Master's in Computer Science, aiming to delve deeper into areas like Computer Vision, Artificial Intelligence, and Machine Learning. These advanced studies are essential for developing sophisticated health tech solutions that can address complex healthcare challenges on a global scale.

#
## Conclusion: A Journey of Innovation, Resilience, and Community

Reflecting on my journey at NIT Raipur, I realize that it was more than an academic pursuit; it was a transformative experience that shaped my career and personal ethos. The blend of rigorous academics, impactful projects, competitive programming, and active community engagement provided a holistic education that extended beyond the classroom.

NIT Raipur instilled in me the values of discipline, perseverance, and innovation—qualities that have been pivotal in my professional roles at Grojha and Optum. The challenges I faced and overcame during my time at NIT Raipur taught me resilience and adaptability, preparing me to tackle the dynamic and ever-evolving landscape of health technology.

As I continue my journey in the field of health tech, I carry forward the lessons, skills, and memories from NIT Raipur. The institute not only provided me with a strong academic foundation but also inspired me to leverage technology for societal betterment, driving me to pursue ventures that make a meaningful impact on people's lives.

#
---
###

*This blog post reflects my personal academic journey and experiences at NIT Raipur. The views and experiences shared are my own and represent the transformative power of quality education in shaping one's career and aspirations.*`,
    },
  ],
  projectMetaData: [
    {
      id: 1,
      image: "project_1.jpeg",
      slug: "Building-a-Robust-PintOS-Thread-Scheduler",
      title: "Building a Robust PintOS Thread Scheduler",
      date: "2025-05-01",
      excerpt:
        "This project enhances PintOS’s basic round-robin scheduler by introducing three key mechanisms to achieve efficient and fair thread management. First, the busy-waiting loop in timer_sleep() is replaced with an interrupt-driven sleep queue: sleeping threads are moved off the CPU into a sorted list by wake-up time, so they no longer consume cycles while waiting. Second, nested priority donation is implemented to prevent priority inversion: when a high-priority thread blocks on a lock held by a lower-priority thread (and that thread may itself be blocked), the higher priority propagates through the chain until the original lock holder can run and release its locks. Finally, a Multi-Level Feedback Queue Scheduler (MLFQS) uses 17.14 fixed-point arithmetic to compute each thread’s recent_cpu and the system-wide load_avg, recalculating priorities periodically based on these metrics and a thread’s niceness. Together, these enhancements ensure that I/O-bound threads do not spin, high-priority threads cannot be starved by medium-priority tasks, and CPU-bound threads’ priorities adjust dynamically to promote fairness.",
      content: `# Building a Robust PintOS Thread Scheduler
## Alarm Clock, Priority Donation, and MLFQ Scheduling



## Introduction

In this comprehensive guide, we'll transform PintOS's basic round-robin thread scheduler into a sophisticated, production-quality scheduling system. Our journey encompasses three critical enhancements:

###
1. **Alarm Clock**: Replace busy-waiting in \`timer_sleep()\` with an interrupt-driven system
###
2. **Priority Scheduling**: Implement nested priority donation to prevent priority inversion  
###
3. **MLFQS**: Integrate a Multi-Level Feedback Queue Scheduler for dynamic priority adjustment
###
By the end of this guide, you'll understand how to build a scheduler that efficiently handles I/O-bound sleeps, ensures high-priority threads never starve, and dynamically adapts to workload patterns using fixed-point arithmetic.

#

## Project Overview

### Objective

Transform PintOS's thread scheduler with three critical features:

###

    | Feature | Purpose | Key Benefit |
    |---------|---------|-------------|
    | **Alarm Clock** | Replace busy-waiting with interrupt-driven blocking | Eliminate CPU waste during sleeps |
    | **Priority Scheduling** | Implement nested priority donation | Prevent high-priority thread starvation |
    | **MLFQS** | Dynamic priority adjustment based on CPU usage | Balance fairness and responsiveness |

##
### Key Challenges

- Eliminating CPU waste during sleep operations
- Preventing high-priority thread starvation due to lock contention
- Balancing fairness and responsiveness in scheduling decisions

#

## 1. 🔔 Alarm Clock: Efficient Sleep Implementation

##
### The Busy-Waiting Problem

The original \`timer_sleep()\` implementation suffered from a critical inefficiency:

###
\`\`\`c
void timer_sleep(int64_t ticks) {
    int64_t start = timer_ticks();
    while (timer_ticks() < start + ticks) {
        /* Busy-wait: keep looping until enough ticks have passed. */
    }
}
\`\`\`

###
**Problems with this approach:**
- **100% CPU utilization** during seemingly idle periods
- **Wasted cycles** - threads perform no useful work while spinning
- **Poor system responsiveness** due to unnecessary CPU consumption

##
### Solution: A Sorted Sleep Queue

Our solution maintains a sleep queue sorted by wake-up time, enabling efficient O(1) wake-up checks.

###
#### Data Structure
###

\`\`\`c
struct sleeping_thread {
    int64_t wakeup_tick;       /* Absolute wake time in ticks */
    struct thread *thread;     /* Thread that is blocked */
    struct list_elem elem;     /* Sorted insertion element */
};

/* Global sleep queue, sorted by wakeup_tick */
static struct list sleeping_threads_list;
\`\`\`

###
#### Implementation
###

\`\`\`c
/* Comparison function for sorting by wakeup_tick */
static bool sleep_cmp_wakeup_tick(const struct list_elem *a,
                                  const struct list_elem *b,
                                  void *aux UNUSED) {
    struct sleeping_thread *sa = list_entry(a, struct sleeping_thread, elem);
    struct sleeping_thread *sb = list_entry(b, struct sleeping_thread, elem);
    return sa->wakeup_tick < sb->wakeup_tick;
}

/* Insert a sleeping_thread into the sorted sleep queue */
static void add_to_sleep_list(struct sleeping_thread *entry) {
    list_insert_ordered(&sleeping_threads_list,
                        &entry->elem,
                        sleep_cmp_wakeup_tick,
                        NULL);
}

/* Enhanced timer_sleep() implementation */
void timer_sleep(int64_t ticks) {
    if (ticks <= 0) return;

    int64_t start = timer_ticks();
    int64_t wakeup_tick = start + ticks;

    struct sleeping_thread *entry = malloc(sizeof(*entry));
    entry->wakeup_tick = wakeup_tick;
    entry->thread = thread_current();

    enum intr_level old_level = intr_disable();
    add_to_sleep_list(entry);
    thread_block();
    intr_set_level(old_level);
}
\`\`\`

###
#### Wake-Up in Timer Interrupt Handler
###

\`\`\`c
void timer_interrupt(struct intr_frame *args UNUSED) {
    ticks++;

    /* Wake up threads whose sleep time has arrived */
    while (!list_empty(&sleeping_threads_list)) {
        struct sleeping_thread *first =
            list_entry(list_front(&sleeping_threads_list),
                       struct sleeping_thread, elem);

        if (ticks >= first->wakeup_tick) {
            list_pop_front(&sleeping_threads_list);
            thread_unblock(first->thread);
            free(first);
        } else {
            /* Since the list is sorted, no other thread is ready */
            break;
        }
    }

    thread_tick();
}
\`\`\`

##
### 🎉 Key Benefits

- **O(1) Wake-Up Checks**: Only inspect the first element in sorted list
- **Zero CPU Usage While Sleeping**: Blocked threads removed from ready queue
- **Safe Synchronization**: Interrupt disabling ensures atomic operations

#

## 2. Priority Scheduling & Nested Donation

##
### The Priority Inversion Problem

Consider this classic scenario:

###
\`\`\`
Timeline: Thread L (priority 30) → Thread M (priority 40) → Thread H (priority 63)

1. Thread L acquires Lock A
2. Thread H attempts to acquire Lock A and blocks
3. Thread M preempts Thread L, preventing Lock A release
4. Thread H waits indefinitely despite having highest priority

\`\`\`

**Result**: High-priority threads starve behind medium-priority threads! 😱

##
### Solution: Nested Priority Donation

When a high-priority thread blocks on a lock held by a lower-priority thread, we **donate** the high priority to the lock holder. This donation propagates recursively through lock chains.

###
#### Enhanced Data Structures
###

\`\`\`c
struct thread {
    int priority;              /* Effective priority (may be donated) */
    int ori_priority;          /* Original base priority */
    struct lock *waiting_lock; /* Lock the thread is currently blocked on */
    struct list locks;         /* Locks currently held, sorted by highest waiter priority */
    struct list_elem elem;     /* For insertion into ready list or donation list */
    /* … existing PintOS thread fields … */
};

struct lock {
    struct thread *holder;     /* Current owner of the lock, or NULL */
    struct list waiters;       /* Threads blocked on this lock, sorted by priority */
    struct list_elem lock_elem; /* For insertion into a thread's locks list */
    int priority;              /* Highest priority among threads waiting on this lock */
    /* … existing PintOS lock fields … */
};
\`\`\`

###
#### Priority Donation Implementation
###

\`\`\`c
void donate_priority(struct thread *donor, struct lock *lock) {
    struct thread *holder = lock->holder;
    if (holder == NULL)
        return;

    if (holder->priority < donor->priority) {
        holder->priority = donor->priority;

        /* Recursive donation through lock chains */
        if (holder->waiting_lock != NULL) {
            donate_priority(holder, holder->waiting_lock);
        }
    }
}
\`\`\`

###
#### Lock Acquisition with Donation
###

\`\`\`c
void lock_acquire(struct lock *lock) {
    enum intr_level old_level = intr_disable();
    struct thread *cur = thread_current();

    if (lock->holder != NULL) {
        cur->waiting_lock = lock;
        donate_priority(cur, lock);
        
        /* Insert cur into lock->waiters, highest priority first */
        list_insert_ordered(&lock->waiters,
                            &cur->elem,
                            thread_cmp_priority,
                            NULL);
        thread_block();
        
        /* Execution resumes here after lock_release unblocks us */
        cur->waiting_lock = NULL;
    }

    /* Acquire lock */
    lock->holder = cur;
    list_insert_ordered(&cur->locks,
                        &lock->lock_elem,
                        lock_cmp_priority,
                        NULL);
    cur->priority = max(cur->ori_priority, get_highest_donated_priority(cur));

    intr_set_level(old_level);
}
\`\`\`

###
#### Lock Release and Priority Restoration
###

\`\`\`c
void lock_release(struct lock *lock) {
    enum intr_level old_level = intr_disable();
    struct thread *cur = thread_current();

    /* Remove lock from cur->locks */
    list_remove(&lock->lock_elem);

    if (!list_empty(&lock->waiters)) {
        /* Wake up highest-priority waiter */
        struct list_elem *max_elem = list_pop_front(&lock->waiters);
        struct thread *next = list_entry(max_elem, struct thread, elem);

        lock->holder = next;
        list_insert_ordered(&next->locks,
                            &lock->lock_elem,
                            lock_cmp_priority,
                            NULL);
        next->waiting_lock = NULL;
        thread_unblock(next);
    } else {
        lock->holder = NULL;
    }

    /* Restore or recompute cur's priority */
    int donated = get_highest_donated_priority(cur);
    cur->priority = max(cur->ori_priority, donated);

    /* Preempt if necessary */
    if (!list_empty(&ready_list)) {
        struct thread *highest_ready =
            list_entry(list_front(&ready_list), struct thread, elem);
        if (cur->priority < highest_ready->priority) {
            thread_yield();
        }
    }

    intr_set_level(old_level);
}
\`\`\`

##
### Why Nested Donation Matters

###
**Example Scenario:**
- Thread H (priority 63) waits for Lock A → held by Thread M (priority 40)
- Thread M is blocked on Lock B → held by Thread L (priority 30)

###
**Without nested donation:**
1. H donates 63 to M, but M remains blocked on B
2. L stays at priority 30, allowing medium-priority threads to preempt
3. H waits indefinitely!

###
**With nested donation:**
1. H's donation propagates: M becomes priority 63
2. M donates 63 to L (recursive propagation) 
3. L runs immediately at priority 63, releases B, then A
4. H can finally proceed!

#

## 3. Multi-Level Feedback Queue Scheduler (MLFQS)


### Why MLFQS?

Static priority scheduling has limitations:

- **CPU-bound high-priority threads** can monopolize the CPU
- **Manual priority tuning burden** on programmers
- **No adaptation** to changing workload patterns

MLFQS automatically:

1. **Tracks CPU usage** (\`recent_cpu\`) with exponential decay
2. **Monitors system load** (\`load_avg\`) reflecting runnable threads
3. **Dynamically adjusts priorities** using the formula:

\`\`\`
priority = PRI_MAX - (recent_cpu / 4) - (nice × 2)
\`\`\`

This BSD-inspired design promotes fairness between CPU-bound and I/O-bound workloads.

### Fixed-Point Arithmetic Implementation

Since PintOS kernel cannot use floating-point, we implement **17.14 fixed-point arithmetic** (17 integer bits, 14 fractional bits):

\`\`\`c
typedef int fixed_point_t;

/* Convert integer n to fixed point */
static fixed_point_t int_to_fp(int n) {
    return n << 14;
}

/* Convert fixed-point x to nearest integer (round) */
static int fp_to_int_round(fixed_point_t x) {
    if (x >= 0)
        return (x + (1 << 13)) >> 14;
    else
        return (x - (1 << 13)) >> 14;
}

/* Fixed-point arithmetic operations */
static fixed_point_t fp_add(fixed_point_t x, fixed_point_t y) {
    return x + y;
}

static fixed_point_t fp_sub(fixed_point_t x, fixed_point_t y) {
    return x - y;
}

static fixed_point_t fp_mul(fixed_point_t x, fixed_point_t y) {
    return ((int64_t)x * y) >> 14;
}

static fixed_point_t fp_div(fixed_point_t x, fixed_point_t y) {
    return ((int64_t)x << 14) / y;
}
\`\`\`

### Enhanced Thread Structure

\`\`\`c
struct thread {
    int nice;                  /* Niceness: -20 (high priority) .. +20 (low priority) */
    fixed_point_t recent_cpu;  /* Scaled CPU usage (17.14 fixed-point) */
    /* … existing fields … */
};

static fixed_point_t load_avg; /* System load average (17.14 fixed-point) */
\`\`\`

### Key MLFQS Formulas

#### 1. System Load Average
Updated once per second (every \`TIMER_FREQ\` ticks):

\`\`\`
load_avg = (59/60) × load_avg + (1/60) × ready_threads
\`\`\`

\`\`\`c
void update_load_avg(void) {
    /* Count ready threads (exclude idle) */
    size_t ready_threads = list_size(&ready_list);
    if (thread_current() != idle_thread)
        ready_threads++;

    fixed_point_t term1 = fp_mul(fp_div(int_to_fp(59), int_to_fp(60)), load_avg);
    fixed_point_t term2 = fp_mul(fp_div(int_to_fp(1), int_to_fp(60)), 
                                 int_to_fp((int) ready_threads));
    load_avg = fp_add(term1, term2);
}
\`\`\`

#### 2. Recent CPU Usage
Updated per tick for running thread and per second for all threads:

\`\`\`
recent_cpu = (2×load_avg)/(2×load_avg + 1) × recent_cpu + nice
\`\`\`

\`\`\`c
void update_recent_cpu_all(void) {
    struct list_elem *e;
    for (e = list_begin(&all_list); e != list_end(&all_list); e = list_next(e)) {
        struct thread *t = list_entry(e, struct thread, allelem);
        if (t != idle_thread) {
            fixed_point_t coeff = fp_div(fp_mul(int_to_fp(2), load_avg),
                                        fp_add(fp_mul(int_to_fp(2), load_avg),
                                               int_to_fp(1)));
            t->recent_cpu = fp_add(fp_mul(coeff, t->recent_cpu), int_to_fp(t->nice));
        }
    }
}
\`\`\`

#### 3. Priority Calculation
Updated every 4 ticks and when threads unblock:

\`\`\`c
void update_priority(struct thread *t) {
    if (t == idle_thread) return;

    /* Compute recent_cpu / 4, rounding to nearest */
    int recent_div_4 = fp_to_int_round(fp_div(t->recent_cpu, int_to_fp(4)));
    int new_priority = PRI_MAX - recent_div_4 - (t->nice * 2);

    /* Clamp to valid range */
    if (new_priority > PRI_MAX) new_priority = PRI_MAX;
    if (new_priority < PRI_MIN) new_priority = PRI_MIN;

    t->priority = new_priority;
}
\`\`\`

### Integration into Timer Interrupt

\`\`\`c
void thread_tick(void) {
    struct thread *cur = thread_current();

    if (thread_mlfqs) {
        /* Increment recent_cpu for running thread */
        if (cur != idle_thread) {
            cur->recent_cpu = fp_add(cur->recent_cpu, int_to_fp(1));
        }

        /* Every second: update load_avg and all threads' recent_cpu */
        if (timer_ticks() % TIMER_FREQ == 0) {
            update_load_avg();
            update_recent_cpu_all();
        }

        /* Every 4 ticks: update running thread's priority */
        if (timer_ticks() % 4 == 0) {
            update_priority(cur);
        }
    }

    /* … existing scheduling logic … */
}
\`\`\`

### 📊 MLFQS Behavior Example

Consider two threads A and B, both with \`nice = 0\`:

**Initial State:**
\`\`\`
priority_A = 63 - (0/4) - (0 × 2) = 63
priority_B = 63 - (0/4) - (0 × 2) = 63
\`\`\`

**Timeline:**

| Ticks | Running Thread | recent_cpu_A | recent_cpu_B | priority_A | priority_B | Next Scheduled |
|-------|----------------|--------------|--------------|------------|------------|----------------|
| 0-7   | A              | 8            | 0            | 61         | 63         | B              |
| 8-11  | B              | 8            | 4            | 61         | 62         | B              |
| 12-15 | B              | 8            | 8            | 61         | 61         | Round-robin    |

**Key Insight:** CPU-bound threads accumulate higher \`recent_cpu\`, leading to lower priorities and better fairness! 🎯

---

## 4. 🔧 Design Trade-Offs and Optimizations

### Alarm Clock: Overhead vs. Efficiency

| Pros ✅ | Cons ❌ |
|---------|---------|
| Sleeping threads consume zero CPU | O(N) insertion into sorted list |
| O(1) wake-up checks per tick | Memory allocation/deallocation overhead |

**🚀 Optimization Ideas:**
- Use binary min-heap for O(log N) insertion, O(1) peek
- Embed sleep entries in thread structure to avoid dynamic allocation

### Priority Donation: Power vs. Complexity  

| Pros ✅ | Cons ❌ |
|---------|---------|
| Solves priority inversion completely | Recursive donation can be expensive |
| Works with nested lock scenarios | Complex bookkeeping for held locks |

**🚀 Optimization Ideas:**
- Limit donation depth to prevent unbounded recursion
- Use max-heap for O(1) highest-donated priority lookup

### MLFQS: Fairness vs. Performance

| Pros ✅ | Cons ❌ |
|---------|---------|
| Automatic workload balancing | Fixed-point arithmetic adds overhead |
| No manual priority tuning needed | O(T) updates every second for all threads |

**🚀 Optimization Ideas:**
- Stagger per-thread updates across multiple ticks
- Update priorities only on unblock/yield events

---

## 🎉 Conclusion

Our enhanced PintOS scheduler now delivers:

1. **⚡ Idle-Time Efficiency**: Zero CPU usage for sleeping threads via sorted sleep queues
2. **🔒 Inversion-Resilient**: Nested priority donation prevents high-priority thread starvation  
3. **🔄 Dynamic Fairness**: MLFQS automatically balances CPU-bound vs. I/O-bound workloads

### 🔑 Key Takeaways

- **Sorted Wait Queues** enable O(1) wake-up performance critical for timer interrupts
- **Nested Donation** must correctly propagate through lock chains and restore priorities
- **Fixed-Point Arithmetic** allows BSD-style MLFQS without floating-point support
- **Feature vs. Overhead Balance** requires careful consideration of complexity costs

With these enhancements, PintOS transforms from a basic round-robin scheduler into a **production-grade thread scheduler** capable of handling diverse workloads efficiently and fairly! 🚀

---

## 📚 References

- Anderson, T., & Dahlin, M. *Operating Systems: Principles and Practice*
- 4.4BSD Scheduler Documentation (load_avg, recent_cpu, priority formulas)
- PintOS Project Specification: "Project 2: Alarm Clock, Priority Scheduling, and MLFQS"
- PintOS Source Code (Stanford University)

---

*Built with ❤️ for operating systems education*`,
    },
    {
      id: 2,
      image: "project_2.jpeg",
      slug: "Implementing-User-Program-Execution-and-System-Call-Support-in-PintOS",
      title: "Implementing User Program Execution and System Call Support in PintOS",
      date: "2025-04-19",
      excerpt:
        "This project lays the groundwork for running user-space programs in PintOS by implementing command-line parsing, user–kernel communication, and basic system calls. Using strtok_r, the kernel safely tokenizes the command-line string in a multithreaded context, then builds the initial user stack so that main(argc, argv) sees correctly aligned argument strings and pointers; any overflow or misalignment causes an immediate exit(-1). A per-process file descriptor table (a fixed-size array of 128 entries) maps open files to FDs, with operations like open, read, write, and close protected by a global filesystem lock to prevent concurrent corruption. The wait and exit system calls synchronize parent and child processes via semaphores: the parent blocks on load_sema until the child finishes loading its executable, and later blocks on exit_sema to retrieve the child’s exit status exactly once, avoiding race conditions or zombies. Rigorous validation of every user pointer before copying or dereferencing ensures safety, prioritizing correctness over performance in this educational OS.",
      content: `# Implementing User Program Execution and System Call Support in PintOS

## Introduction

This document describes the design and implementation of **Project 2: User Programs** for PintOS (CSE 521). The primary objectives are:

1. **Argument Parsing and Stack Setup**
   - Parse a command-line string into individual arguments
   - Construct the user stack so that the child process's \`main(argc, argv)\` sees the correct layout

2. **Basic System Call Support**
   - Implement file descriptor management (\`open\`, \`read\`, \`write\`, \`close\`)
   - Implement \`wait\` and \`exit\` so that a parent can retrieve a child's exit status
   - Synchronize between parent and child during exec, loading, and termination

3. **User-Kernel Memory Safety**
   - Validate every user-provided pointer before dereferencing or copying
   - Ensure that invalid or unmapped pointers trigger a safe termination (\`exit(-1)\`)

Below, we present in-depth details of data structures, algorithms, synchronization mechanisms, and design rationales. All code snippets are in C and assume a Unix/x86-32 calling convention on a 4 KB user stack.

---

## 1. Argument Parsing and Stack Construction

### 1.1 Data Structures

We extended the kernel's thread structure (\`struct thread\`) to track information related to argument passing and parent/child synchronization:

\`\`\`c
/* In thread.h */
struct thread {
    /* … existing fields … */

    int exit_status;                /* Child's exit code (e.g., -1 on error) */
    struct semaphore load_sema;     /* Parent waits here until child finishes loading */
    struct semaphore exit_sema;     /* Parent waits here until child calls exit */
    bool has_parent_waited;         /* Prevent multiple wait() calls on the same child */

    /* … remaining fields … */
};
\`\`\`

- **\`exit_status\`**: Stores the child's exit code. When \`process_exit()\` runs, it sets this field before signaling the parent.
- **\`load_sema\`**: Initialized to 0 in \`init_thread()\`. The parent calls \`sema_down(&child->load_sema)\` immediately after creating the child thread; the child calls \`sema_up(&child->load_sema)\` once it finishes loading the executable (or fails).
- **\`exit_sema\`**: Initialized to 0. The parent calls \`sema_down(&child->exit_sema)\` inside \`sys_wait\`. The child calls \`sema_up(&child->exit_sema)\` in \`process_exit\` after setting \`exit_status\`.
- **\`has_parent_waited\`**: A boolean flag to prevent multiple \`wait()\` calls on the same child. Once the parent wakes up from \`exit_sema\`, it sets this flag to true, and further calls to \`wait(child_tid)\` immediately return –1.

### 1.2 Algorithms

#### 1.2.1 Tokenization with \`strtok_r\`

To split the command line into individual arguments, we use \`strtok_r\` for reentrancy and thread safety.

\`\`\`c
char *save_ptr;
for (char *token = strtok_r(cmdline, " \t\n", &save_ptr);
     token != NULL;
     token = strtok_r(NULL, " \t\n", &save_ptr)) {
    /* Each \`token\` is one argument, e.g., "exec", "arg1", "arg2". */
    push_argument_onto_stack(token);
}
\`\`\`

**Why \`strtok_r\` and not \`strtok\`?**
- \`strtok\` uses a static buffer to track its position, which is not safe if two threads (or nested calls) parse arguments simultaneously.
- \`strtok_r\` takes a caller-supplied \`save_ptr\` pointer to store intermediate state, ensuring that each thread's parsing context is independent.

#### 1.2.2 Stack Construction

After splitting the command line into tokens, we must build the user stack so that when the new process begins execution, it sees:

\`\`\`
[ argument strings … ]  ← higher addresses
[ word-align padding ]
[ argv pointers (argv[0], argv[1], …, NULL) ]
[ argc ]
[ return address (fake) ]
[ ↓ initial %esp points here ]
\`\`\`

**Steps:**

1. **Push Argument Strings**
   - For each argument \`arg_i\` (in reverse order), copy the null-terminated string onto the stack.
   - Keep track of each string's user-space address.
   - Example: If arguments are \`["a", "b"]\`, push \`"b\0"\` first, then \`"a\0"\`.

\`\`\`c
/* Pseudo-code inside load/userstack.c */
size_t total_args = count_tokens(cmdline);
char *arg_addresses[MAX_ARGS];

/* Push strings in reverse order */
for (i = total_args - 1; i >= 0; i--) {
    size_t len = strlen(tokens[i]) + 1;  /* include '\0' */
    esp -= len;                          /* grow stack downward */
    memcpy(esp, tokens[i], len);
    arg_addresses[i] = esp;              /* record address in user memory */
}
\`\`\`

2. **Word-Align the Stack**
   - The x86 calling convention requires \`%esp\` to be 16-byte aligned at the time of a function call; however, PintOS does not strictly enforce 16-byte alignment. We align to 4 bytes for simplicity.
   - Compute \`align = ((uintptr_t)esp) & 0x3\`; if \`align != 0\`, subtract \`align\` from \`esp\` to reach a multiple of 4.

\`\`\`c
uintptr_t align = ((uintptr_t)esp) & 0x3;
if (align != 0) {
    esp -= align;
    /* (Contents of these padding bytes are undefined, so no need to fill.) */
}
\`\`\`

3. **Push Argument Pointers (argv array)**
   - Push the addresses of each argument string (again, in reverse order), followed by a terminating \`NULL\`.
   - After this, the stack looks like:

\`\`\`
+----------------+  ← esp + 0
|   NULL         |  (argv[argc] = NULL)
+----------------+
|   &arg_str[n]  |  (argv[n-1])
+----------------+
|     ...        |
+----------------+
|   &arg_str[0]  |  (argv[0])
+----------------+
\`\`\`

\`\`\`c
/* Push NULL sentinel */
esp -= sizeof(char *);
*((char **)esp) = NULL;

/* Push addresses of argument strings */
for (i = total_args - 1; i >= 0; i--) {
    esp -= sizeof(char *);
    *((char **)esp) = arg_addresses[i];
}
\`\`\`

4. **Push argc and Fake Return Address**
   - Push the integer \`argc\`.
   - Push a fake return address (0) so that if \`main\` ever returns, the process will exit cleanly.

\`\`\`c
/* Push argc */
esp -= sizeof(int);
*((int *)esp) = total_args;

/* Push fake return address */
esp -= sizeof(void *);
*((void **)esp) = 0;
\`\`\`

5. **Overflow Prevention**
   - Before pushing each string or pointer, compute the total space required (\`sum_of_string_lengths + N × sizeof(char*) + sizeof(int) + padding\`).
   - If \`stack_bottom - (sum_needed) < PHYS_BASE - PGSIZE\`, then the command line is too large to fit on the stack. In that case, call \`exit(-1)\` (which invokes \`process_exit\` and terminates the thread).

\`\`\`c
size_t sum_strings = 0;
for (i = 0; i < total_args; i++)
    sum_strings += strlen(tokens[i]) + 1;

size_t sum_pointers = (total_args + 1) * sizeof(char *);
size_t overhead = sizeof(int) + sizeof(void *); /* argc + fake ret */
size_t total_needed = sum_strings + sum_pointers + 3 + overhead; /* +3 for worst-case 4-byte align */

if ((PHYS_BASE - PGSIZE) + total_needed > PHYS_BASE) {
    /* Not enough stack space: terminate with error code -1 */
    exit(-1);
}
\`\`\`

### 1.3 Rationale

**Why Use \`strtok_r\` Instead of \`strtok\`?**
- **Reentrancy**: \`strtok_r\` requires a \`save_ptr\` local to the caller, so two threads can simultaneously parse different strings without corrupting a global parsing state.
- **Thread Safety**: In a multi-threaded kernel, any use of \`strtok\` risks undefined behavior if, for example, one thread is preempted in the middle of parsing and another thread calls \`strtok\`.

**Unix Shell–Style Argument Separation**
- **Flexibility**: Delegating parsing to a shell allows for richer syntax (e.g., quotes, wildcards). Although PintOS's argument parsing is simpler (space-delimited), we follow the Unix convention to remain compatible with typical user expectations.
- **Security**: Keeping parsing logic in user space reduces the kernel's attack surface. A bug in the kernel's argument-parsing code is much harder to mitigate than a shell-level buffer overflow, because the kernel must remain correct at all times.

---

## 2. System Calls

This section covers our implementation of basic system calls: \`exit\`, \`wait\`, and file-related calls (\`open\`, \`read\`, \`write\`, \`close\`). We focus on data structures, algorithms for validating user memory, and synchronization between parent and child.

### 2.1 Data Structures

#### 2.1.1 Thread-Level Changes

\`\`\`c
/* In thread.h */
#define FD_TABLE_MAX 128

struct thread {
    /* … from Section 1 … */

    struct file *file_descriptors[FD_TABLE_MAX];
    int next_fd;               /* Next available file descriptor (starts at 2) */

    /* … existing fields … */
};
\`\`\`

- **\`file_descriptors\`**: An array of pointers to \`struct file\`. Index 0 and 1 are reserved for stdin and stdout, respectively. The rest (2–127) map to open files.
- **\`next_fd\`**: Initialized to 2. Each time \`sys_open()\` returns a new FD, we increment \`next_fd\` to find the first unused slot.

#### 2.1.2 Global Filesystem Lock

\`\`\`c
/* In filesys.c or a global sync file */
struct lock fs_lock;
\`\`\`

- Protects all calls into the file system (e.g., \`file_open()\`, \`file_read()\`, \`file_write()\`, \`file_close()\`, \`filesys_remove()\`).
- Ensures that two threads do not corrupt on-disk structures or in-memory data when they concurrently create/remove/lookup files.

#### 2.1.3 File Descriptor Management
- Each user process maintains its own \`file_descriptors\` array. FDs are unique per process:
  - FD 2 in process A refers to a different \`struct file *\` than FD 2 in process B.
- On \`sys_open(char *filename)\`:
  1. Acquire \`fs_lock\`.
  2. Call \`file_open(filename)\`. If \`NULL\`, release \`fs_lock\` and return –1.
  3. Otherwise, scan \`file_descriptors\` from index 2 to \`FD_TABLE_MAX – 1\` to find the first \`NULL\` slot; set that entry to the returned \`struct file *\` and return its index.
  4. Release \`fs_lock\`.

### 2.2 Algorithms

#### 2.2.1 Validating User Pointers: \`require_user_ptr\`

Before any system call that reads or writes user data—such as \`sys_read(int fd, void *buffer, unsigned size)\` or \`sys_write(int fd, const void *buffer, unsigned size)\`—we must ensure that all user-supplied pointers:
1. Are non-NULL.
2. Are within the user address space (\`is_user_vaddr(uaddr)\`).
3. Are mapped to physical memory (\`pagedir_get_page(thread_current()->pagedir, uaddr) != NULL\`).

For multi-byte ranges, we validate each page along the buffer:

\`\`\`c
void
require_user_ptr(const void *uaddr) {
    if (uaddr == NULL)
        exit(-1);

    if (!is_user_vaddr(uaddr))
        exit(-1);

    if (pagedir_get_page(thread_current()->pagedir, uaddr) == NULL)
        exit(-1);
}

void
validate_buffer(const void *buffer, unsigned size) {
    const uint8_t *byte_ptr = (const uint8_t *)buffer;
    for (unsigned i = 0; i < size; i++) {
        require_user_ptr(byte_ptr + i);
    }
}
\`\`\`

**Precision vs. Performance**
- In the best case (buffer lies entirely within one page, e.g., addresses 0x1000–0x13FF), only one page-table lookup is needed.
- In the worst case (buffer spans two pages, e.g., 0x1FFC–0x2003), two lookups.
- We chose correctness over performance, since a single system call's overhead is dominated by blocking and context switches anyway.

#### 2.2.2 \`sys_read\` / \`sys_write\` Data Transfer

\`\`\`c
static int
sys_write(int fd, const void *buffer, unsigned size) {
    struct thread *cur = thread_current();

    /* Validate user buffer pointers */
    validate_buffer(buffer, size);

    if (fd == 1) {
        /* Write to stdout */
        putbuf(buffer, size);
        return size;
    }

    if (fd < 0 || fd >= FD_TABLE_MAX || cur->file_descriptors[fd] == NULL)
        return -1;

    struct file *f = cur->file_descriptors[fd];
    char kbuf[size];

    /* Copy user data into kernel buffer */
    memcpy(kbuf, buffer, size);

    /* Serialize file system operations */
    lock_acquire(&fs_lock);
    int bytes_written = file_write(f, kbuf, size);
    lock_release(&fs_lock);

    return bytes_written;
}

static int
sys_read(int fd, void *buffer, unsigned size) {
    struct thread *cur = thread_current();
    validate_buffer(buffer, size);

    if (fd == 0) {
        /* Read from stdin */
        int count = 0;
        while (count < (int)size) {
            ((char *)buffer)[count++] = input_getc();
        }
        return count;
    }

    if (fd < 0 || fd >= FD_TABLE_MAX || cur->file_descriptors[fd] == NULL)
        return -1;

    struct file *f = cur->file_descriptors[fd];
    char kbuf[size];

    lock_acquire(&fs_lock);
    int bytes_read = file_read(f, kbuf, size);
    lock_release(&fs_lock);

    /* Copy data back to user buffer */
    memcpy(buffer, kbuf, bytes_read);
    return bytes_read;
}
\`\`\`

- **Buffer Validation**: We call \`validate_buffer\` on both buffer and \`buffer + size − 1\` (to ensure the final byte is valid).
- **File System Locking**: All calls into the file system are wrapped by \`lock_acquire(&fs_lock)\` / \`lock_release(&fs_lock)\`.
- **Copying Data**:
  - For \`sys_read\`, copy from kernel space (\`kbuf\`) back into user space using \`memcpy\`.
  - For \`sys_write\`, copy from user space into \`kbuf\`.

#### 2.2.3 \`wait\` System Call

\`\`\`c
static int
sys_wait(pid_t child_tid) {
    struct thread *cur = thread_current();
    struct thread *child = find_child_by_tid(cur, child_tid);

    if (child == NULL || child->has_parent_waited)
        return -1;

    /* Parent blocks until child signals exit_sema. */
    sema_down(&child->exit_sema);

    /* Child has exited: retrieve exit_status and mark as waited. */
    int status = child->exit_status;
    child->has_parent_waited = true;
    remove_child_from_list(cur, child);
    return status;
}
\`\`\`

- **Finding the Child**: We maintain a list of child threads in each parent's \`struct thread\`. \`find_child_by_tid\` scans this list for \`child_tid\`.
- **Preventing Multiple Waits**: If \`child->has_parent_waited\` is already true, return –1.
- **Blocking on \`exit_sema\`**: The parent calls \`sema_down(&child->exit_sema)\`. If the child has already exited, its \`exit_sema\` is already up, so \`sema_down\` returns immediately. Otherwise, the parent blocks until \`process_exit\` does \`sema_up(&child->exit_sema)\`.
- **Cleanup**: After waking up, the parent records \`child->exit_status\`, sets \`child->has_parent_waited = true\`, and removes the child from the parent's list. Then it returns the exit code.

#### 2.2.4 \`exit\` and \`process_exit\`

\`\`\`c
void
process_exit(void) {
    struct thread *cur = thread_current();
    int status = cur->exit_status;  /* Already set by sys_exit or default 0 */

    /* Close all open files */
    for (int fd = 2; fd < FD_TABLE_MAX; fd++) {
        if (cur->file_descriptors[fd] != NULL) {
            file_close(cur->file_descriptors[fd]);
            cur->file_descriptors[fd] = NULL;
        }
    }

    /* Signal parent that we are exiting */
    sema_up(&cur->exit_sema);

    /* Free page directory, other cleanup… */
    /* … existing PintOS cleanup … */
}
\`\`\`

- **Setting \`exit_status\`**:
  - In \`sys_exit(int status)\`, we set \`cur->exit_status = status\`.
  - Then call \`process_exit()\`.
- **Closing File Descriptors**: Iterate through \`file_descriptors[2..127]\` and call \`file_close()\`.
- **Signaling the Parent**: \`sema_up(&cur->exit_sema)\` unblocks any parent waiting in \`sys_wait()\`.

#### 2.2.5 Error-Handling Strategy
- **Prevalidation**: Every user pointer is validated via \`require_user_ptr\` (as shown above). If any check fails, we call \`exit(-1)\`.
- **Immediate Termination**: If any system call encounters an invalid pointer or an unexpected condition (e.g., fd not in range, file descriptor slot empty), we either return an error code (usually –1) or call \`exit(-1)\` when the kernel must abort that process.

\`\`\`c
/* Example from sys_write: */
static int
sys_write(int fd, const void *buffer, unsigned size) {
    require_user_ptr(buffer);                      /* Validate buffer start */
    require_user_ptr(buffer + size - 1);           /* Validate buffer end */

    if (fd == 1) {
        putbuf(buffer, size);
        return size;
    }

    /* … handle other FDs or return –1 … */
}
\`\`\`

---

## 3. Synchronization

Proper synchronization is critical to prevent race conditions between parent and child threads during exec, loading the executable, and termination.

### 3.1 \`exec\` System Call Synchronization

1. **Parent Creates Child**
   - \`sys_exec(const char *cmdline)\` calls \`process_execute(cmdline)\`, which creates a new thread to run \`start_process\`.
   - The new thread is given a copy of \`cmdline\` so that the parent can continue using its own stack.

2. **Parent Waits for Child to Load**
   - Immediately after calling \`process_execute\`, the parent calls:
   \`\`\`c
   sema_down(&child->load_sema);
   \`\`\`
   This blocks the parent until the child finishes loading the executable.

3. **Child Loads Executable**
   - In \`start_process(void *cmd_copy)\`, the child attempts to load the ELF binary and set up its initial stack.
   - If loading succeeds, the child sets \`load_success = true\` in its \`struct thread\` and then calls:
   \`\`\`c
   sema_up(&parent->load_sema);
   \`\`\`
   This wakes the parent.
   - If loading fails, the child sets \`load_success = false\` and still calls \`sema_up(&parent->load_sema)\` before calling \`exit(-1)\`.

4. **Parent Receives Load Status**
   - After \`sema_down\`, the parent checks \`child->load_success\`.
   - If false, \`sys_exec\` returns –1. Otherwise, it returns the child's tid.

### 3.2 Parent-Child Synchronization on \`wait\` / \`exit\`

**Case 1: Parent Calls \`wait\` Before Child Exits**
1. Parent executes \`sys_wait(child_tid)\` and finds \`child->exit_sema\`.
2. Parent calls \`sema_down(&child->exit_sema)\` and blocks.
3. Child eventually calls \`process_exit()\`, which does \`sema_up(&child->exit_sema)\`.
4. Parent wakes, retrieves \`exit_status\`, sets \`child->has_parent_waited = true\`, and returns the status.

**Case 2: Child Exits Before Parent Calls \`wait\`**
1. Child calls \`process_exit()\`, performing cleanup and \`sema_up(&child->exit_sema)\`.
2. The \`exit_sema\` count becomes 1.
3. When the parent later calls \`sys_wait(child_tid)\`, the call to \`sema_down(&child->exit_sema)\` returns immediately (because the semaphore is already up).
4. Parent collects \`exit_status\` and proceeds as above.

**Resource Cleanup and "Zombie" Processes**
- If the parent exits first (e.g., calls \`exit()\` before collecting its children's statuses), the child becomes a zombie.
- We do not implement a reaper thread in PintOS, so these zombies remain until the entire process terminates.
- When a child calls exit, it closes all open files and releases page tables. After signaling the parent, it calls \`thread_exit()\`, which frees the thread's TCB.

---

## 4. Detailed Design Rationales

### 4.1 User Memory Access
- **Strict Validation of Every Byte**
  - For multi-byte buffers (e.g., in \`sys_write\`), we validate each byte's address to ensure it lies in a user page.
  - This prevents scenarios such as a buffer starting in valid memory but extending into kernel or unmapped pages.
  - **Trade-Off**: We accepted the performance overhead of repeated page-table lookups in exchange for correctness and security. A single pointer dereference error in the kernel can cause a complete system panic, which is far more disruptive than a slightly slower read or write call.

### 4.2 File Descriptor Management
- **Array-Based FD Table**
  - We chose a fixed-size array of 128 entries (\`FD_TABLE_MAX\`) for simplicity.
  - **Advantage**: O(1) lookup, minimal code complexity.
  - **Disadvantage**: Limit of 126 user-opened files per process. Should a process need more, it must close existing ones.
  - We considered a dynamically resizable data structure (e.g., a hash table), but that would increase complexity without significant benefit for an educational OS.

### 4.3 \`tid_t\` as \`pid_t\`
- We did identity mapping: the thread ID (\`tid_t\`) is used as the process ID (\`pid_t\`) in user-space calls.
- **Rationale**:
  - Simplifies tracking parent/child relationships.
  - Avoids extra translation tables.
- **Alternative**: Maintain a separate namespace for PIDs (e.g., hashed or incremented independently). This complicates bookkeeping without clear benefit in PintOS.

---

## 5. Survey Questions

1. **Difficulty**
   - **Argument Parsing & Stack Alignment**: Ensuring correct 4-byte alignment while pushing variable-length strings onto the stack was challenging. We used \`hex_dump\` to inspect the stack contents and verify correctness.
   - **Synchronization (exec/wait)**: Coordinating \`load_sema\` and \`exit_sema\` to avoid deadlocks and zombie processes required careful ordering of \`sema_down\` / \`sema_up\` calls.

2. **Key Insight**
   - Implementing \`wait\` and \`exit\` demonstrated how modern operating systems manage orphaned processes and resource cleanup. We realized the importance of atomic semaphore operations to ensure that parents do not miss signals or wait indefinitely.

3. **Hints for Future Students**
   - **Stack Alignment Testing**: Use \`hex_dump()\` extensively to verify that:
     - Argument strings are in the correct order.
     - The \`argv\` array ends with a \`NULL\` sentinel.
     - \`%esp\` is a multiple of 4 bytes before entering \`main\`.
   - **Pointer Validation**: In \`require_user_ptr\`, always check both the start and end of a buffer before performing \`memcpy()\`. A single off-by-one error can cause a kernel panic.

4. **TA Suggestions**
   - Provide annotated diagrams showing the stack layout for various argument counts (e.g., 1 argument, 5 arguments, 20 arguments).
   - Give examples of edge cases, such as passing exactly 4 KB of argument data, to highlight overflow conditions.

5. **Final Thoughts**
   - PintOS's minimal documentation forced us to read the source code of \`threads/init.c\`, \`process.c\`, and \`lib/user/syscall.c\` to understand how interrupts, page tables, and file I/O are implemented. This deep dive solidified our understanding of user–kernel interactions in a simple educational OS.

---

## 6. Implementation Notes

1. **Stack Alignment**
   - Used a helper macro \`align_stack_word(uint8_t *esp)\` that does:
   \`\`\`c
   uintptr_t align = ((uintptr_t)esp) & 0x3;
   if (align != 0)
       esp -= align; /* ensure esp mod 4 == 0 */
   \`\`\`
   - Verified with \`hex_dump((uint32_t *)esp, 64)\` after pushing all arguments, before calling \`intr_exit\`, to ensure \`%esp\` is 4-byte aligned.

2. **Semaphore Initialization**
   - In \`init_thread()\`, after allocating a new \`struct thread\`, we initialized:
   \`\`\`c
   sema_init(&t->load_sema, 0);
   sema_init(&t->exit_sema, 0);
   t->has_parent_waited = false;
   t->exit_status = -1;     /* Default exit code if child crashes before setting */
   \`\`\`

3. **Testing**
   - Wrote custom test scripts (in the PintOS test suite) to cover:
     - **Edge Cases in Argument Parsing**: Exactly 1 argument, exactly 128 arguments (exceeding 4 KB), arguments of length 0 (empty string).
     - **Invalid Pointers**: Pass a buffer starting at a valid address but extending into unmapped pages to read. Expect \`exit(-1)\`.
     - **Wait/Exit Synchronization**: Parent calls \`wait\` after child has already exited. Expect immediate return. Child exits before parent calls \`wait\`. Expect no deadlock.
     - **File Descriptor Limits**: Attempt to open more than 126 files in a single process. Expect \`sys_open\` to return –1 once the table is full.
   - Used \`msg()\` to print debug messages in user programs and \`hex_dump()\` to inspect memory.
   - Verified that zombies do not resurrect: once a child calls \`process_exit\`, its TCB is freed after the parent collects its status.

---

## Conclusion

This completes the detailed, technically accurate description of **Project 2: User Programs** for PintOS. We have shown how to:

- Parse command-line arguments safely and build the initial user stack
- Implement \`exit\`, \`wait\`, and basic file I/O system calls with rigorous user-pointer validation
- Synchronize parent and child threads during exec and wait

With these mechanisms, PintOS can successfully run simple C user programs, handle multiple open files, and ensure user–kernel memory safety.`,
    },
    {
      id: 3,
      image: "project_3.jpeg",
      slug: "Designing-a-16-Bit-Single-Cycle-Processor-in-Verilog",
      title: "Designing a 16-Bit Single-Cycle Processor in Verilog",
      date: "2025-04-19",
      excerpt:
        "In this project, I designed and implemented a single-cycle, non-pipelined 16-bit processor capable of executing basic arithmetic, logical, memory, and control-flow instructions. Each instruction completes in exactly one clock cycle, and the processor adheres strictly to a 16-bit word size. The goal was to build a simple yet fully functional CPU that can fetch, decode, execute, and write back results for instructions such as ADD, SUB, SLL, AND, LW, SW, BEQ, BNE, and JMP. By using Verilog alongside Vivado for simulation and synthesis, I was able to verify correctness in software and deploy the design on an FPGA.",
      content: `# Designing a 16-Bit Single-Cycle Processor in Verilog

## Introduction

This project implements a non-pipelined, single-cycle 16-bit processor that supports a basic instruction set, including arithmetic, logical, memory, and control-flow instructions. Each instruction completes in exactly one clock cycle.

### Main Objectives

1. **Fetch, Decode, Execute, Write Back**
   - Fetch a 16-bit instruction from memory
   - Decode its opcode and fields
   - Execute the operation in the ALU
   - Write results back to registers or memory

2. **Instruction Set Support**
   - **R-Type**: ADD, SUB, SLL, AND
   - **I-Type**: ADDI, LW, SW, BEQ, BNE
   - **J-Type**: JMP

3. **16-Bit Datapath**
   - All registers, ALU operands, and immediates are 16 bits wide
   - Little-endian storage in both instruction and data memory

The processor was implemented using Verilog and tested with Vivado for simulation, synthesis, and generating a bitstream for the Basys 3 FPGA.

---

## Processor Features

### Single-Cycle Architecture
Every instruction (fetch → decode → execute → memory/access → write-back) completes in one clock cycle. This simplifies the control logic at the expense of a lower maximum clock frequency.

### Non-Pipelined Execution
No overlapping of instruction stages. If a hazard is detected (data or control), the processor stalls for exactly one clock cycle.

### 16-Bit Word Size
- Register values, ALU operations, and immediate fields are all exactly 16 bits
- Memory accesses operate on either 8-bit bytes or 16-bit words

### Basic Instruction Set

#### R-Type Instructions (opcode = \`4'b0000\`)
- \`ADD  rd, rs1, rs2\` - Add two registers
- \`SUB  rd, rs1, rs2\` - Subtract two registers
- \`AND  rd, rs1, rs2\` - Bitwise AND
- \`SLL  rd, rs1, rs2\` - Shift left logical by rs2[3:0]

#### I-Type Instructions
- \`ADDI rd, rs1, imm4\` - Add 4-bit immediate
- \`LW   rd, offset(rs1)\` - Load word from memory
- \`SW   rs2, offset(rs1)\` - Store word to memory
- \`BEQ  rs1, rs2, offset\` - Branch if equal
- \`BNE  rs1, rs2, offset\` - Branch if not equal

#### J-Type Instructions
- \`JMP  target\` - Unconditional jump

---

## Datapath & Control Overview

The high-level datapath architecture shows how the Program Counter, Instruction Memory, Control Unit, Register File, Sign-Extend unit, ALU, Data Memory, and multiplexers interconnect:

\`\`\`
                        +----------------+
                        |  Program Count |---+
                        |    (PC)        |   |
                        +----------------+   v
                                  |       [Address]
                                  v
                        +----------------+
                        | Instruction    |  (fetch 16-bit instr)
                        |   Memory       |--+
                        +----------------+  |
                                            v
                       (16-bit instruction) 
                                            |
                                            v
                                  +----------------+
                                  |   Control      |--+ --> ALU_op
                                  |   Unit         |   +--> RegWrite
                                  +----------------+   +--> MemRead/Write
                                            |          +--> Branch / Jmp
                          [opcode, funct]  v          +--> ALUSrc / MemToReg
                                  +----------------+
                                  |  Register File |-- rs1_data
                                  +----------------+-- rs2_data
                                  |  Sign-Extend   |-- imm16
                                  +----------------+
                                            |
                                            v
                                  +----------------+
                                  |      ALU       |-- alu_result
                                  +----------------+-- zero_flag
                                            |
                        +----------------+  |         +----------------+
                        |   Data Memory  |<---------+ |  Mux (Mem/ALU)|
                        +----------------+  |         +----------------+
                                            v
                                    [mem_read_data]
                                            |
                              +-------------------------+
                              |   Write-back to RegFile |
                              +-------------------------+
\`\`\`

### Key Components
- **PC → Instruction Memory**: The PC provides a byte address; two consecutive bytes form one 16-bit instruction
- **Control Unit**: Decodes opcode and function bits to generate control signals
- **Register File**: Reads rs1 and rs2 values; rd and write_data are governed by RegWrite
- **Sign-Extend**: Extends a 4-bit immediate to 16 bits (preserving sign)
- **ALU**: Performs arithmetic and logical operations, and sets zero_flag for branches
- **Data Memory**: Reads or writes bytes/words based on control signals
- **Multiplexers**: Route data between ALU inputs and write-back paths

---

## Module Implementations

### 1. Program Counter (\`program_counter.v\`)

The Program Counter (PC) is a 16-bit register that tracks the address of the next instruction.

#### Features
1. **Reset** (\`rst\`) → PC ← 0
2. **Jump** (\`Jmp\`) → PC ← new_address (16-bit target)
3. **Branch** (\`Branch && zero_flag\`) → PC ← branch_address
4. **Increment** → PC ← PC + 2 (since each 16-bit instruction is 2 bytes)

\`\`\`verilog
// program_counter.v
module program_counter (
    input           clk,
    input           rst,
    input           Jmp,
    input           Branch,
    input  [15:0]   new_address,
    input  [15:0]   branch_address,
    input           zero_flag,
    output reg [15:0] pc_out
);

    always @(posedge clk or posedge rst) begin
        if (rst) begin
            pc_out <= 16'b0;                    // Reset to 0
        end else if (Jmp) begin
            pc_out <= new_address;              // Unconditional jump
        end else if (Branch && zero_flag) begin
            pc_out <= branch_address;           // Conditional branch
        end else begin
            pc_out <= pc_out + 16'd2;           // Next instruction
        end
    end

endmodule
\`\`\`

### 2. Instruction Memory (\`instruction_memory.v\`)

Instruction Memory is a byte-addressable array (mem) of size 64K × 8 bits. Each 16-bit instruction is stored in two consecutive bytes in little-endian order.

\`\`\`verilog
// instruction_memory.v
module instruction_memory (
    input  [15:0]   address,     // Byte address from PC
    output reg [15:0] instruction
);

    // 64K × 8‐bit memory
    reg [7:0] mem [0:65535];

    initial begin
        // Initialize the first ~1000 bytes (example program)
        mem[0]   = 8'h10; // low byte of instruction at address 0
        mem[1]   = 8'h02; // high byte
        mem[2]   = 8'h11; // instruction at address 2 low byte
        mem[3]   = 8'h02; // high byte
        // … Continue for all instructions …
    end

    always @(*) begin
        // Combine two bytes (little-endian) into one 16-bit instruction
        instruction = { mem[address + 1], mem[address] };
    end

endmodule
\`\`\`

### 3. Control Unit (\`control_unit.v\`)

The Control Unit inspects the fetched instruction's opcode (bits [15:12]) and function field (bits [3:0]) to generate all control signals.

#### Control Signals
- **ALU_op [3:0]**: Tells the ALU which operation to perform
- **RegWrite**: Enables writing to the Register File
- **MemRead/MemWrite**: Control Data Memory reads/writes
- **Branch**: Indicates a conditional branch (BEQ or BNE)
- **Jmp**: Indicates an unconditional jump
- **ALUSrc**: Selects between register operand and immediate for ALU B input
- **MemToReg**: Selects whether write-back data comes from ALU or Data Memory

\`\`\`verilog
// control_unit.v
module control_unit (
    input  [15:0]   instruction,
    input           zero_flag,
    output reg [3:0] ALU_op,
    output reg      RegWrite,
    output reg      MemRead,
    output reg      MemWrite,
    output reg      Branch,
    output reg      Jmp,
    output reg      ALUSrc,
    output reg      MemToReg
);

    wire [3:0] opcode = instruction[15:12];
    wire [3:0] funct  = instruction[3:0]; // For R-type

    always @(*) begin
        // Default control signals (NOP)
        ALU_op   = 4'b0000;
        RegWrite = 1'b0;
        MemRead  = 1'b0;
        MemWrite = 1'b0;
        Branch   = 1'b0;
        Jmp      = 1'b0;
        ALUSrc   = 1'b0;
        MemToReg = 1'b0;

        case (opcode)
            4'b0000: begin  // R-type
                case (funct)
                    4'b0000: ALU_op = 4'b0010; // ADD
                    4'b0001: ALU_op = 4'b0110; // SUB
                    4'b0010: ALU_op = 4'b1000; // AND
                    4'b0011: ALU_op = 4'b0001; // SLL
                    default: ALU_op = 4'b0000; // NOP
                endcase
                RegWrite = 1'b1;
            end

            4'b1000: begin  // LW
                ALU_op   = 4'b0010; // ADD (address calculation)
                ALUSrc   = 1'b1;    // Immediate as second operand
                MemRead  = 1'b1;    // Read from memory
                RegWrite = 1'b1;    // Write back to register
                MemToReg = 1'b1;    // Data comes from memory
            end

            4'b1001: begin  // SW
                ALU_op   = 4'b0010; // ADD (address calculation)
                ALUSrc   = 1'b1;    // Immediate
                MemWrite = 1'b1;    // Write to memory
            end

            4'b1010: begin  // BEQ
                ALU_op = 4'b0110;   // SUB (compare)
                Branch = 1'b1;      // Conditional branch
            end

            4'b1011: begin  // BNE
                ALU_op = 4'b0110;   // SUB (compare)
                Branch = 1'b1;      // Conditional branch
            end

            4'b1100: begin  // ADDI
                ALU_op   = 4'b0010; // ADD (immediate)
                ALUSrc   = 1'b1;
                RegWrite = 1'b1;    // Write back result
            end

            4'b1101: begin  // JMP
                Jmp = 1'b1;         // Unconditional jump
            end

            default: begin
                // Other opcodes = NOP
            end
        endcase
    end

endmodule
\`\`\`

### 4. Register File (\`register_file.v\`)

The Register File contains 16 registers (R0–R15), each 16 bits wide.

#### Features
- **Read Ports (asynchronous)**: \`rs1_data = regfile[rs1]\`, \`rs2_data = regfile[rs2]\`
- **Write Port (synchronous)**: If \`RegWrite = 1\`, then \`regfile[rd] <= write_data\`
- **Memory Load**: If \`MemRead = 1\`, then \`regfile[rd] <= mem_data\`

\`\`\`verilog
// register_file.v
module register_file (
    input            clk,
    input            rst,
    input      [3:0] rs1,       // Source register 1
    input      [3:0] rs2,       // Source register 2
    input      [3:0] rd,        // Destination register
    input     [15:0] write_data,
    input            RegWrite, 
    input            MemRead,   // Load from memory
    input     [15:0] mem_data,  
    output    [15:0] rs1_data,
    output    [15:0] rs2_data
);

    reg [15:0] regfile [0:15];  // 16 registers × 16 bits

    // Asynchronous reads:
    assign rs1_data = regfile[rs1];
    assign rs2_data = regfile[rs2];

    // Synchronous write:
    always @(posedge clk or posedge rst) begin
        if (rst) begin
            integer i;
            for (i = 0; i < 16; i = i + 1) begin
                regfile[i] <= 16'b0;
            end
        end else if (RegWrite) begin
            regfile[rd] <= write_data;
        end else if (MemRead) begin
            regfile[rd] <= mem_data;
        end
    end

endmodule
\`\`\`

### 5. Sign-Extend Unit (\`sign_extend.v\`)

The Sign-Extend unit takes a 4-bit immediate and extends it to 16 bits by replicating the sign bit.

\`\`\`verilog
// sign_extend.v
module sign_extend (
    input  [3:0]   imm4,
    output [15:0]  imm16
);
    assign imm16 = { {12{imm4[3]}}, imm4 };
    // If imm4[3]=1, copies 1 twelve times; else copies 0.
endmodule
\`\`\`

#### Examples
- \`imm4 = 4'b1111\` → \`imm16 = 16'b1111111111111111\` (–1 in two's complement)
- \`imm4 = 4'b0010\` → \`imm16 = 16'b0000000000000010\` (+2)

### 6. Arithmetic Logic Unit (\`alu.v\`)

The ALU performs arithmetic and logical operations on two 16-bit operands.

#### Inputs/Outputs
- **Inputs**: \`A[15:0]\`, \`B[15:0]\`, \`ALU_op[3:0]\`
- **Outputs**: \`alu_result[15:0]\`, \`zero_flag\`

\`\`\`verilog
// alu.v
module alu (
    input      [15:0] A,
    input      [15:0] B,
    input      [3:0]  ALU_op,
    output reg [15:0] alu_result,
    output           zero_flag
);

    always @(*) begin
        case (ALU_op)
            4'b0010: alu_result = A + B;            // ADD / ADDI / LW / SW  
            4'b0110: alu_result = A - B;            // SUB / BEQ / BNE compare  
            4'b1000: alu_result = A & B;            // AND  
            4'b0001: alu_result = A << B[3:0];      // SLL (shift left logical)  
            default: alu_result = 16'b0;            // NOP or undefined
        endcase
    end

    assign zero_flag = (alu_result == 16'b0) ? 1'b1 : 1'b0;

endmodule
\`\`\`

#### Branch Address Calculation
\`\`\`verilog
branch_address = pc_out + 16'd2 + (imm16 << 1);
\`\`\`

### 7. Data Memory (\`data_memory.v\`)

Data Memory is a 64K × 8-bit array that supports byte and word operations.

#### Control Signals
- **mem_read**: When high, \`read_data\` is driven by memory contents
- **mem_write**: When high, \`write_data\` is stored into memory
- **byte_enable**: Selects byte vs. word access

\`\`\`verilog
// data_memory.v
module data_memory (
    input           clk,
    input           rst,
    input           mem_read,
    input           mem_write,
    input           byte_enable,
    input      [15:0] address,    // Byte address
    input      [15:0] write_data, // Data to write
    output reg [15:0] read_data
);

    reg [7:0] mem [0:65535];  // 64K × 8 bits
    integer i;

    // Write logic (synchronous)
    always @(posedge clk or posedge rst) begin
        if (rst) begin
            for (i = 0; i < 65536; i = i + 1) begin
                mem[i] <= 8'h00;
            end
        end else if (mem_write) begin
            if (byte_enable) begin
                mem[address] <= write_data[7:0];
            end else begin
                // Word write, little-endian
                mem[address]     <= write_data[7:0];
                mem[address + 1] <= write_data[15:8];
            end
        end
    end

    // Read logic (combinational)
    always @(*) begin
        if (mem_read) begin
            if (byte_enable) begin
                // Zero-extend 8-bit value to 16 bits
                read_data = { 8'h00, mem[address] };
            end else begin
                // Word read (two bytes, little-endian)
                read_data = { mem[address + 1], mem[address] };
            end
        end else begin
            read_data = 16'b0;
        end
    end

endmodule
\`\`\`

### 8. Multiplexer (\`mux_2to1.v\`)

A simple 2-to-1 multiplexer used for ALU input selection and write-back data selection.

\`\`\`verilog
// mux_2to1.v
module mux_2to1 (
    input  [15:0] in0,
    input  [15:0] in1,
    input         sel,
    output [15:0] out
);

    assign out = (sel) ? in1 : in0;

endmodule
\`\`\`

#### Usage
1. **ALU Input MUX** (\`ALUSrc\`): Chooses between \`rs2_data\` (register) and \`imm16\` (sign-extended immediate)
2. **Write-Back MUX** (\`MemToReg\`): Chooses between \`alu_result\` and \`mem_read_data\`

---

## Testing and Verification

### Testbench (\`cpu_tb.v\`)

A comprehensive Verilog testbench was created to verify CPU functionality before FPGA implementation.

#### Key Features

1. **Clock Generation (50 MHz)**
\`\`\`verilog
initial begin
    clk = 1'b0;
    forever #10 clk = ~clk; // Toggle every 10 ns
end
\`\`\`

2. **Reset Sequence**
\`\`\`verilog
initial begin
    rst = 1'b1;
    #20 rst = 1'b0; // Keep reset high for two cycles
end
\`\`\`

3. **Signal Monitoring**
   - \`$monitor\` prints internal signals each cycle
   - Tracks PC, instruction, register values, ALU results, control signals
   - Waveform dump (\`$dumpvars\`) for post-simulation inspection

4. **Test Program Coverage**
   - Initialize registers (e.g., \`ADDI R1, R0, 5\`)
   - Perform arithmetic operations (\`ADD\`, \`SUB\`, \`AND\`, \`SLL\`)
   - Test memory access (\`LW\`/\`SW\`)
   - Branch instructions (\`BEQ\`/\`BNE\`) to confirm PC updates
   - Jump (\`JMP\`) to confirm unconditional PC update

### Simulation Verification

The simulation confirmed:
- Correct instruction fetch from memory
- Proper control signal generation
- Accurate register file read/write operations
- Correct ALU computations and zero flag setting
- Proper data memory load/store operations
- Correct PC updates for branches and jumps

### Waveform Analysis

Using Vivado's waveform viewer, verified:
- **Clock & Reset Behavior**: PC resets to 0 on \`rst\`
- **Instruction Fetch**: 16-bit instruction matches memory initialization
- **Control & Data Flow**: Control signals change during decode stage
- **Branch/Jump Timing**: PC updates correctly for all control flow instructions

---

## FPGA Hardware Demonstration

After simulation verification, the design was synthesized and loaded onto a Basys 3 FPGA (Xilinx Artix-7).

### Implementation Features

#### LED Output Pattern
A simple test program that doubles a register value every clock cycle:

\`\`\`assembly
ADDI R1, R0, 1    // R1 = 1
LOOP: ADD R1, R1, R1  // R1 = R1 + R1 (2, 4, 8, 16, …)
      JMP LOOP         // infinite loop
\`\`\`

The lower 8 bits of R1 (\`R1[7:0]\`) are mapped to the 8 onboard LEDs, displaying binary patterns:
\`\`\`
0000_0001 → 0000_0010 → 0000_0100 → 0000_1000 → 0001_0000 → ...
\`\`\`

#### User Controls
- **Reset Button** (\`rst_btn\`): Tied to the CPU's \`rst\` signal, clearing registers and PC
- **Manual Clock Button** (\`clk_btn\`): Generates single-step clock pulse for cycle-by-cycle debugging

#### Hardware Verification
- LED patterns matched simulation exactly
- Reset button functionality confirmed
- Manual clock stepping allowed precise timing inspection
- Each LED update corresponded to one clock cycle

---

## Conclusion

This project demonstrates a fully functional 16-bit single-cycle CPU implemented in Verilog. All essential modules operate together to fetch, decode, execute, and write back instructions in one cycle.

### Key Achievements

1. **Program Counter** handles sequential fetch, conditional branches, and unconditional jumps
2. **Instruction Memory** stores instructions in little-endian format and outputs 16-bit values
3. **Control Unit** decodes opcodes and function fields to generate correct control signals
4. **Register File** provides fast read/write ports for register operands and write-back
5. **Sign-Extend** ensures immediate values preserve sign when extended to 16 bits
6. **ALU** performs arithmetic/logic operations and sets zero flag for branches
7. **Data Memory** supports both byte and word accesses under byte-enable control
8. **Multiplexers** route operands and write-back data based on control signals
9. **Testbench and Simulation** verify all instructions in a cycle-accurate manner
10. **FPGA Demonstration** confirms correct behavior in actual hardware with visible LED patterns

The final implementation successfully demonstrates a working 16-bit processor on the Basys 3 FPGA, capable of running small programs and providing real-time debugging through LEDs and pushbuttons.

---

## References

- **Xilinx Vivado Design Suite User Guide** – For simulation, synthesis, and bitstream generation
- **Samir Palnitkar, Verilog HDL: A Guide to Digital Design and Synthesis** – Verilog coding conventions and best practices
- **Basys 3 Reference Manual (Digilent)** – Board-specific pin assignments, LED/button mappings, and clock sources
- **University lecture notes on computer architecture and single-cycle datapath design**`,
    },
    {
      id: 4,
      image: "project_4.jpeg",
      slug: "Reinforcement-Learning-Environment-for-Autonomous-Drone-Delivery",
      title: "Reinforcement Learning Environment for Autonomous Drone Delivery",
      date: "2025-04-19",
      excerpt:
        "In this project, I define, implement, and analyze both deterministic and stochastic Reinforcement Learning (RL) environments for an autonomous drone tasked with picking up two packages and delivering them to specified destinations on a 6×6 grid. The agent’s goal is to navigate around dynamic obstacles (tornadoes, wind zones, birds) while minimizing penalties and maximizing delivery rewards. After specifying the environment (states, actions, transition dynamics, and reward structure), I apply tabular RL methods—namely Q-Learning and Double Q-Learning—to demonstrate how an agent can learn optimal policies under both deterministic and stochastic conditions. This blog delves deeply into the technical design choices, algorithmic details, and empirical results.",
      content: `# Defining and Solving a Reinforcement Learning Environment for Autonomous Drone Delivery

## Topic

Designing, Implementing, and Analyzing Tabular RL Solutions in a 6×6 Autonomous Drone Delivery Grid

---

## Introduction

In this project, I define, implement, and analyze both deterministic and stochastic Reinforcement Learning (RL) environments for an autonomous drone tasked with picking up two packages and delivering them to specified destinations on a 6×6 grid. The agent's goal is to navigate around dynamic obstacles (tornadoes, wind zones, birds) while minimizing penalties and maximizing delivery rewards. After specifying the environment (states, actions, transition dynamics, and reward structure), I apply tabular RL methods—namely Q-Learning and Double Q-Learning—to demonstrate how an agent can learn optimal policies under both deterministic and stochastic conditions. This blog delves deeply into the technical design choices, algorithmic details, and empirical results.

---

## 1. Environment Design

### 1.1 Grid Layout and Components

- **Grid Size**: 6×6 (rows and columns indexed 0..5).
- **Cells**: Each cell may contain one of the following:
  - 📦 Package pickup location (two distinct cells, each with a different package).
  - 🚁 Drone's starting position.
  - 🎯 Delivery destination (two distinct cells, matching package labels).
  - 🌪 Tornado (no-fly zone; entering incurs a large negative reward).
  - 🌬 Wind zone (adjacent cells around the tornado; entering incurs wind-push mechanics or penalties).
  - 🦅 Bird (moving obstacle; entering incurs negative reward).
  - 🏠 Home base (optional "safe" cell; not strictly required for this assignment).
  - ⬜ Empty cell (free to navigate).

### Example Deterministic Layout (Indices in parentheses):

\`\`\`
(0,0) 🚁   (0,1) ⬜   (0,2) ⬜   (0,3) ⬜   (0,4) ⬜   (0,5) 🛖  
(1,0) ⬜   (1,1) ⬜   (1,2) ⬜   (1,3) ⬜   (1,4) ⬜   (1,5) 🦅  
(2,0) ⬜   (2,1) ⬜   (2,2) 🎁   (2,3) ⬇   (2,4) ⬜   (2,5) ⬜  
(3,0) ⬜   (3,1) ⬜   (3,2) ⬇   (3,3) 🌪   (3,4) ⬆   (3,5) ⬜  
(4,0) ⬜   (4,1) ⬜   (4,2) ⬜   (4,3) ➡   (4,4) ⬜   (4,5) ⬜  
(5,0) 🛖  (5,1) 🦅  (5,2) ⬜   (5,3) ⬜   (5,4) ⬜   (5,5) 🏠  
\`\`\`

**Legend:**
- 🚁 Drone
- 🎁 Package 1 (P1)
- ⬇ Wind cell (downward push)
- ⬆ Wind cell (upward push)
- ➡ Wind cell (rightward push)
- 🌪 Tornado (no-fly)
- 🦅 Bird (obstacle)
- 📦 Package 2 (P2)
- 🛖 (Home base or waiting zone)
- 🎯 (Delivery location—for P1 or P2)
- ⬜ Empty cell

> **Note**: In the deterministic setup, all elements (location of tornado, wind‐affected cells, birds, packages, destinations, etc.) remain constant across episodes. In the stochastic version (Section 1.4), these elements are randomized at the start and/or move during execution.

---

### 1.2 State Representation

Each grid cell is represented by its row and column index, so the drone's position is a tuple (r, c) with 0 ≤ r, c ≤ 5. In addition to position, the agent's state must encode:

1. **Carry Status for Two Packages:**
   - \`picked_p1 ∈ {0,1}\` (0 = not carrying P1, 1 = carrying P1).
   - \`picked_p2 ∈ {0,1}\` (0 = not carrying P2, 1 = carrying P2).

2. **Delivery Status:**
   - \`delivered_p1 ∈ {0,1}\`
   - \`delivered_p2 ∈ {0,1}\`

Thus, the full state can be represented as a 6‐tuple:

\`\`\`
State = (r, c, picked_p1, picked_p2, delivered_p1, delivered_p2)
\`\`\`

There are at most 6 × 6 × 2 × 2 × 2 × 2 = 6,912 possible states, though many are unreachable (e.g., carrying a package after having delivered it). In practice, we only consider states that satisfy consistency constraints (e.g., you cannot deliver a package you didn't pick up, you cannot pick up more than once, etc.).

---

### 1.3 Action Space

At each time step, the drone can choose exactly one action from the following discrete set of eight possible actions:

1. **Movement Actions** (deterministic grid‐world style):
   - Up (move from (r,c) → (r−1, c))
   - Down (move from (r,c) → (r+1, c))
   - Left (move from (r,c) → (r, c−1))
   - Right (move from (r,c) → (r, c+1))

2. **Interaction Actions:**
   - PickUp (if r,c contains an unpicked package, set that package's picked flag to 1)
   - DropOff (if r,c is the correct destination for a currently carried package, sets that package's delivered flag to 1)

3. **No‐Op / Hover Action:**
   - Stay (drone remains in place; useful if wind or dynamic obstacles would otherwise force it to move)

Attempting any invalid action (like moving off the grid, picking up where no package exists, or dropping off at the wrong cell) incurs an immediate negative penalty (see Section 1.5).

---

### 1.4 Deterministic vs. Stochastic Variants

#### 1.4.1 Deterministic Environment

- **Fixed Layout Across Episodes:**
  - Drone's start position, package pickup cells, delivery cells, tornado cell, wind‐affected cells, and bird positions remain identical each run.

- **Transition Dynamics:**
  - If the drone chooses net "Up" in cell (r,c), next state is (r−1,c) (unless that is invalid or blocked).
  - Entering a wind‐affected cell always pushes the drone exactly one cell in the wind's direction (e.g., entering a "wind‐down" cell forces an extra move to (r+1,c)). There is no randomness in wind behavior.

- **Bird Collisions:**
  - If the drone moves into a bird's cell, it incurs a fixed –50 penalty and remains in the same cell (bird occupies an impassable obstacle cell).

Because transitions are fully predictable, the drone can eventually learn a deterministic shortest‐path strategy to collect both packages and deliver them while avoiding all obstacles and penalties.

#### 1.4.2 Stochastic Environment

- **Randomized Initialization:**
  - At the beginning of each episode, the following elements are placed randomly on the 6×6 grid (subject to no overlap constraints):
    - Drone's start position
    - Two package pickup cells (P1, P2)
    - Two delivery cells (D1, D2)
    - Tornado (no‐fly zone)
    - Surrounding wind cells (wind "push" zones around the tornado)
    - Two birds (dynamic obstacles)

- **Dynamic Obstacles:**
  - **Tornado Movement**: On every time step, the tornado cell moves to one of its four neighboring empty cells (up/down/left/right) chosen uniformly at random. If a move would leave the grid, it stays put.
  - **Wind Shift**: The four wind cells (adjacent to the tornado) update accordingly after the tornado moves: each adjacent cell becomes a new wind push cell in the direction defined by the tornado's new location.
  - **Bird Movement**: Each bird moves randomly to any of its up/down/left/right neighbors (or stays in place) with equal probability. Bird collisions with the drone incur a –50 penalty and the drone is forced back to its previous cell.

- **Transition Stochasticity:**
  - Even if the drone selects "Up," there is a probability (determined by wind or bird movement) that it is not in Up‐(r−1,c) or remains for a collision penalty.
  - Entering a wind cell has a 70% chance of pushing the drone in the wind's direction and a 30% chance of simply remaining in the wind cell without further movement.

Because the environment evolves unpredictably, the drone must learn a robust policy that accounts for both spatial layout and dynamic disturbances.

---

### 1.5 Reward Structure

The reward system encourages correct pickups/deliveries and penalizes undesirable actions, summarized as follows:

| Event | Reward/Penalty |
|-------|----------------|
| Successfully delivering a package (arrive at correct delivery cell) | +100 |
| Picking up a package at a valid location | +25 |
| Entering a tornado (no‐fly zone) | –100 |
| Being hit by a bird (collision) | –50 |
| Entering a wind cell (any direction) | –10 |
| Movement cost (each step, valid move) | –2 |
| Dropping a package at the wrong location | –50 |
| Attempting to pick up when not at a package cell | –25 |
| Moving out of the grid (invalid move) | –25 |
| Repeating the same move consecutively (no progress) | –50 |

> **Note**: In the current assignment, "Successfully delivering both packages" ends the episode as a terminal state. Additional reward terms (e.g., for failed drop‐offs, repeated invalid attempts, or partially completed deliveries) may be refined in subsequent assignments.

---

### 1.6 Safety and Validity Checks

To ensure the agent only selects legal actions and stays within the defined state‐space, I enforce:

1. **Boundary Checks:**
   - Before moving, verify 0 ≤ r_new < 6 and 0 ≤ c_new < 6. If the move is outside the grid, apply a –25 penalty and remain in (r, c).

2. **Pick‐Up Validation:**
   - Only allow PickUp if (r,c) matches a package's location and that package is not already picked. Invalid attempts yield –25 penalty.

3. **Drop‐Off Validation:**
   - Only allow DropOff if (r,c) matches the correct delivery cell for a currently carried package.
   - If (r,c) is any other cell (or if the package is not being carried), impose a –50 penalty and do not remove the package from the agent's inventory.

4. **No‐Fly Zones (Tornado):**
   - Attempting to move into (r,c) occupied by the tornado results in a –100 penalty and the agent stays in its original cell.

5. **Bird Collisions:**
   - If a bird occupies the same cell as the drone after both have moved, impose a –50 penalty and move the drone back to its previous cell.

6. **Wind‐Push Mechanics:**
   - Upon entering a wind cell, the drone has a 70% chance of being forced one cell in the wind's direction. If that cell is invalid (e.g., outside the grid or tornado), treat it as if the drone attempted to illegally move into a tornado or off‐grid (apply the corresponding penalty).

By embedding these checks in the environment's \`step(action)\` function, the RL agent never "breaks" the rules—even if it repeatedly tries invalid actions. All illegal attempts immediately incur penalties, keeping the agent strictly within the intended MDP.

---

## 2. Deterministic Environment Implementation

### 2.1 Transition Function (Deterministic)

\`\`\`python
def deterministic_step(state, action):
    (r, c, p1, p2, d1, d2) = state
    reward = 0
    next_state = state  # default if invalid or no-op

    # 1. If action == "PickUp":
    if action == "PickUp":
        if (r,c) == package1_location and p1 == 0:
            p1 = 1
            reward = +25
        elif (r,c) == package2_location and p2 == 0:
            p2 = 1
            reward = +25
        else:
            reward = -25  # no package here

    # 2. Elif action == "DropOff":
    elif action == "DropOff":
        if p1 == 1 and (r,c) == delivery1_location:
            p1 = 0
            d1 = 1
            reward = +100
        elif p2 == 1 and (r,c) == delivery2_location:
            p2 = 0
            d2 = 1
            reward = +100
        else:
            reward = -50  # wrong drop-off

    # 3. Elif action in {"Up","Down","Left","Right"}:
    elif action in directions:
        (dr, dc) = direction_vector[action]
        new_r, new_c = r + dr, c + dc

        # Boundary check
        if not (0 <= new_r < 6 and 0 <= new_c < 6):
            reward = -25
            new_r, new_c = r, c
        # Tornado check
        elif (new_r, new_c) == tornado_location:
            reward = -100
            new_r, new_c = r, c
        # Bird check (birds are static in deterministic env)
        elif (new_r, new_c) in bird_locations:
            reward = -50
            new_r, new_c = r, c
        else:
            # Valid move
            reward = -2
            r, c = new_r, new_c

            # If landing on wind cell (deterministic direction)
            if (r, c) in wind_cells:
                reward += -10
                (wr, wc) = wind_push_vector[(r,c)]
                candidate_r, candidate_c = r + wr, c + wc
                if 0 <= candidate_r < 6 and 0 <= candidate_c < 6 \
                   and (candidate_r, candidate_c) != tornado_location:
                    r, c = candidate_r, candidate_c
                else:
                    # wind‐pushed into invalid => same penalty logic as above
                    if not (0 <= candidate_r < 6 and 0 <= candidate_c < 6):
                        reward += -25
                    else:
                        reward += -100
                    r, c = new_r, new_c

    # 4. Else "Stay":
    elif action == "Stay":
        reward = -2  # still incurs movement cost

    next_state = (r, c, p1, p2, d1, d2)
    done = (d1 == 1 and d2 == 1)
    return next_state, reward, done
\`\`\`

Adapted from the deterministic rules in the assignment.

- **Terminal Check**: When both \`d1 == 1\` and \`d2 == 1\`, the episode ends—both packages delivered.
- **Reward Summation**: When multiple events occur in the same step (e.g., step cost + wind push + invalid wind‐push), all corresponding penalties are summed.

---

### 2.2 Visualization Example

At initialization (deterministic layout), we may see:

\`\`\`
Step 0:
🚁 ⬜ ⬜ ⬜ ⬜ 🛖
⬜ ⬜ ⬜ ⬜ ⬜ 🦅
⬜ ⬜ 🎁 ⬇ ⬜ ⬜
⬜ ⬜ ⬇ 🌪 ⬆ ⬜
⬜ ⬜ ⬜ ➡ ⬜ ⬜
🛖 🦅 ⬜ ⬜ ⬜ 🏠

State: r=0, c=0, p1=0, p2=0, d1=0, d2=0
Reward so far: 0
\`\`\`

After choosing "Right" four times to reach (0,4) and so on, the environment renders exactly as above, confirming that transitions and obstacles behave without randomness.

---

## 3. Stochastic Environment Implementation

### 3.1 Randomized Initialization

\`\`\`python
def initialize_stochastic_env():
    # Create empty 6x6 grid
    grid_cells = [(r, c) for r in range(6) for c in range(6)]

    # Randomly place drone start
    drone_start = random.choice(grid_cells)
    grid_cells.remove(drone_start)

    # Randomly place package pickup1, pickup2
    pickup1 = random.choice(grid_cells); grid_cells.remove(pickup1)
    pickup2 = random.choice(grid_cells); grid_cells.remove(pickup2)

    # Randomly place delivery1, delivery2
    delivery1 = random.choice(grid_cells); grid_cells.remove(delivery1)
    delivery2 = random.choice(grid_cells); grid_cells.remove(delivery2)

    # Randomly place tornado
    tornado = random.choice(grid_cells); grid_cells.remove(tornado)

    # Wind cells: the four orthogonal neighbors of tornado (if valid)
    wind_cells = []
    for (dr, dc) in [(1,0),(-1,0),(0,1),(0,-1)]:
        wr, wc = tornado[0] + dr, tornado[1] + dc
        if 0 <= wr < 6 and 0 <= wc < 6:
            wind_cells.append((wr, wc))

    # Remove wind_cells from available positions
    for wc in wind_cells:
        if wc in grid_cells:
            grid_cells.remove(wc)

    # Randomly place two birds
    bird1 = random.choice(grid_cells); grid_cells.remove(bird1)
    bird2 = random.choice(grid_cells); grid_cells.remove(bird2)

    return {
        "drone": drone_start,
        "pickup1": pickup1,
        "pickup2": pickup2,
        "delivery1": delivery1,
        "delivery2": delivery2,
        "tornado": tornado,
        "wind_cells": wind_cells,
        "birds": [bird1, bird2]
    }
\`\`\`

- **Every Episode Reset**: Calls \`initialize_stochastic_env()\` to generate a unique configuration.
- **Dynamic Movement Rules (Each Time Step)**:
  1. **Tornado Movement:**
     - Randomly select one valid neighbor of current tornado cell; move tornado there.
     - Recompute \`wind_cells\` around new tornado.
  2. **Bird Movement:**
     - For each bird, randomly select one of its up/down/left/right neighbors (or stay put) with equal probability.
  3. **Drone's Intended Action:**
     - Process as in deterministic environment, except:
     - **Wind Encounter**: 70% chance of forced "push" one cell in wind direction, else remain.
     - **Bird Collision**: If drone's final position == any bird's new position, apply –50 and revert to previous position.

Because tornado and birds move unpredictably, the transition function is no longer deterministic:

\`\`\`
P(s' | s, a) = Σ over tornado_moves, bird_moves, wind_outcomes of 
               [Probability of (tornado_move, bird_moves, wind_outcome) × δ(s' = resulting_state)].
\`\`\`

In practice, we sample a single stochastic outcome per time step.

---

### 3.2 Stochastic Transition Function (Pseudo‐Code)

\`\`\`python
def stochastic_step(state, action, env):
    (r, c, p1, p2, d1, d2) = state
    reward = 0

    # 0. Save previous drone position (r_old, c_old)
    r_old, c_old = r, c

    # 1. Process drone's chosen action (Up/Down/Left/Right/PickUp/DropOff/Stay)
    #    - Similar checks as deterministic, except no immediate wind push.
    #    - If action in movement, attempt to move to (r', c'), but:
    #         if invalid or tornado, penalty and remain.
    #         if new cell is a bird, penalty and remain.
    #         else update r, c.
    #    - If action == PickUp / DropOff, same as deterministic (no stochasticity in interactions).

    # 2. After moving, check if (r,c) is in wind_cells:
    if (r, c) in env["wind_cells"]:
        reward += -10
        if random() < 0.7:
            # forced wind push
            (wr, wc) = wind_push_vector[(r, c)]
            candidate_r, candidate_c = r + wr, c + wc
            if valid_cell(candidate_r, candidate_c, env):
                r, c = candidate_r, candidate_c
            else:
                # invalid wind push: treat as tornado or off-grid
                if not (0 <= candidate_r < 6 and 0 <= candidate_c < 6):
                    reward += -25
                else:
                    reward += -100
                # Drone stays at (r_old) or (r, c)? In the assignment, we revert to old just once
                r, c = r_old, c_old

    # 3. Randomly update tornado position
    tornado_neighbors = get_valid_neighbors(env["tornado"])
    new_tornado = random.choice(tornado_neighbors + [env["tornado"]])  # can stay put
    env["tornado"] = new_tornado
    # Recompute wind_cells around new tornado
    env["wind_cells"] = [
        (new_tornado[0] + dr, new_tornado[1] + dc)
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]
        if 0 <= new_tornado[0]+dr < 6 and 0 <= new_tornado[1]+dc < 6
    ]

    # 4. Randomly update birds' positions
    new_birds = []
    for bird in env["birds"]:
        bird_neighbors = get_valid_neighbors(bird) + [bird]  # staying still is a choice
        new_bird = random.choice(bird_neighbors)
        new_birds.append(new_bird)
    env["birds"] = new_birds

    # 5. Bird collision check
    if (r, c) in env["birds"]:
        reward += -50
        r, c = r_old, c_old  # revert to previous cell

    # 6. Final step cost if drone moved or stayed
    reward += -2

    # 7. Terminal condition
    done = (d1 == 1 and d2 == 1)

    next_state = (r, c, p1, p2, d1, d2)
    return next_state, reward, done, env
\`\`\`

- The order of stochastic events matters: wind push occurs instantly after movement but before tornado/bird updates.
- Tornado and bird updates affect subsequent time steps.
- Because transitions depend on both the agent's action and RNG events, we cannot precompute all (s, a) → s' pairs exactly—learning must rely on sampling.

---

## 4. Reward System Rationale

To guide the agent toward efficient, safe deliveries, I designed a reward function that balances positive incentives for correct pickups/deliveries with penalties for hazards and extraneous behavior:

1. **Positive Rewards:**
   - Deliver a Package: +100
   - Pick Up a Package: +25

2. **Movement Penalties:**
   - Each Step: –2 (encourages shortest paths)
   - Wind Cell Entry: –10 (discourages risky wind‐zones)

3. **Severe Penalties (Safety Hazards):**
   - Enter Tornado (No‐Fly): –100 (keeps drone away from tornado)
   - Bird Collision: –50 (avoids birds)

4. **Invalid/Unhelpful Actions:**
   - Drop Off at Wrong Location: –50 (discourages random drop‐offs)
   - Pick Up When No Package Present: –25
   - Move Out of Grid: –25
   - Repeat Same Move Twice in a Row: –50 (prevents oscillation)

This reward scheme ensures:

- **Priority 1**: Complete deliveries (2×+100).
- **Priority 2**: Remain safe (avoid tornadoes and birds).
- **Priority 3**: Minimize wasted movement or illegal actions.
- **Priority 4**: Follow correct pick‐up/drop‐off protocol.

### Empirical Observations:

- Without step penalties (–2), the learned policy often wandered unnecessarily.
- Without "repeat" penalty (–50), the agent sometimes oscillated between two adjacent safe cells.
- Once balanced, the drone learned to pick up P2 first (whichever was nearer) then P1, deliver to D2, then D1, in approximately 25–30 steps with maximal cumulative reward.

---

## 5. Tabular Reinforcement Learning Methods

### 5.1 Q-Learning (Off-Policy, Model‐Free)

#### 5.1.1 Algorithm Overview

Q-Learning learns an action‐value function Q(s,a) that estimates the expected discounted return if the agent starts in state s, takes action a, then follows the (learned) optimal policy thereafter. The update rule is:

\`\`\`
Q(s,a) ← Q(s,a) + α [ r + γ max_{a'} Q(s', a') – Q(s,a) ]
\`\`\`

- α (Alpha) = Learning rate (e.g., 0.1)
- γ (Gamma) = Discount factor (e.g., 0.95)
- ε (Epsilon) = Exploration rate (initially 1.0, decaying to 0.01)
- ε-Greedy Action Selection: With probability ε, choose a random valid action; otherwise choose argmax_a Q(s,a).

#### 5.1.2 Hyperparameters (Deterministic)

- \`alpha = 0.1\`
- \`gamma = 0.95\`
- \`epsilon_start = 1.0\`
- \`epsilon_decay = 0.999\`
- \`epsilon_min = 0.01\`
- \`episodes = 10,000\`
- \`max_steps_per_episode = 500\`

#### 5.1.3 Implementation Snippet

\`\`\`python
# Initialize Q-table: Q[state][action] = 0 for all states, actions
Q = defaultdict(lambda: np.zeros(num_actions))

epsilon = epsilon_start

for episode in range(1, episodes+1):
    state = env.reset(deterministic=True)  # deterministic initialization
    done = False
    for step in range(max_steps_per_episode):
        if random.random() < epsilon:
            action = random.choice(env.valid_actions(state))
        else:
            action = np.argmax(Q[state])

        next_state, reward, done, _ = env.step(state, action)
        best_next = np.max(Q[next_state])
        td_target = reward + gamma * best_next * (not done)
        td_error = td_target - Q[state][action]
        Q[state][action] += alpha * td_error

        state = next_state
        if done:
            break

    # Decay epsilon
    if epsilon > epsilon_min:
        epsilon *= epsilon_decay
\`\`\`

- **Storage**: Q is a Python defaultdict keyed by state‐tuples (r, c, p1, p2, d1, d2), each mapping to a NumPy array of length num_actions.
- **Terminal Transition**: When done=True (both packages delivered), best_next is taken as zero (no future reward).

#### 5.1.4 Deterministic Environment Results

- **Training Episodes**: 10,000
- **Max Reward Achieved**: +185 (two deliveries: 2×100 – (approx.) 15 step costs = +185).
- **Average Steps to Complete**: ~25
- **Success Rate**: 100% (after ~3,000 episodes, the agent always delivered both packages within the step limit).

A representative reward‐per‐episode plot showed rapid convergence:

\`\`\`
Episode:   0–1000 → Increasing from ~–200 to ~+100  
Episode:   1000–3000 → Fluctuations around +100–+185  
Episode:   3000–10000 → Plateaus near +185 consistently
\`\`\`

This confirms that Q-Learning found the optimal policy for the deterministic layout.

---

### 5.2 Double Q‐Learning

#### 5.2.1 Motivation

Standard Q-Learning can suffer from overestimation bias when using the same Q‐values to both select and evaluate the next action. Double Q-Learning mitigates this by maintaining two independent Q‐tables, Q1 and Q2, and using one table to select the action and the other to estimate its value.

#### 5.2.2 Update Rules

On each step (with 50% probability), update either Q1 or Q2:

- If updating Q1:
  \`\`\`
  a_max = argmax_a Q1(s', a)
  Q1(s, a) ← Q1(s, a) + α [ r + γ Q2(s', a_max) – Q1(s, a) ]
  \`\`\`

- If updating Q2:
  \`\`\`
  a_max = argmax_a Q2(s', a)
  Q2(s, a) ← Q2(s, a) + α [ r + γ Q1(s', a_max) – Q2(s, a) ]
  \`\`\`

#### 5.2.3 Implementation Snippet

\`\`\`python
# Initialize two Q-tables
Q1 = defaultdict(lambda: np.zeros(num_actions))
Q2 = defaultdict(lambda: np.zeros(num_actions))

epsilon = epsilon_start

for episode in range(1, episodes+1):
    state = env.reset(stochastic=False)  # or stochastic=True if experimenting
    done = False
    for step in range(max_steps_per_episode):
        if random.random() < epsilon:
            action = random.choice(env.valid_actions(state))
        else:
            # Combine to select action: sum Q1 + Q2
            action = np.argmax(Q1[state] + Q2[state])

        next_state, reward, done, _ = env.step(state, action)

        if random.random() < 0.5:
            # Update Q1
            best_next = np.argmax(Q1[next_state])
            target = reward + gamma * Q2[next_state][best_next] * (not done)
            error = target - Q1[state][action]
            Q1[state][action] += alpha * error
        else:
            # Update Q2
            best_next = np.argmax(Q2[next_state])
            target = reward + gamma * Q1[next_state][best_next] * (not done)
            error = target - Q2[state][action]
            Q2[state][action] += alpha * error

        state = next_state
        if done:
            break

    if epsilon > epsilon_min:
        epsilon *= epsilon_decay
\`\`\`

### Key Features

- **Action Selection**: Uses \`argmax(Q1[s] + Q2[s])\`, which tends to reduce overestimation
- **Updates**: Randomly pick which table to update each step
- **Storage Cost**: Twice the memory of Q-Learning, since we maintain two tables

### 5.2.4 Deterministic Environment Results

Even with fewer episodes (e.g., 5,000), Double Q-Learning converged to the optimal policy (max reward +185) in roughly the same number of steps. Because there is no stochastic noise in the deterministic layout, overestimation bias is minimal, and both methods perform equivalently.

---

## 6. Empirical Results & Analysis

### 6.1 Deterministic Environment

#### Q-Learning Performance
- Converged to optimal policy after ~3,000 episodes
- Average reward in final 1,000 episodes: +185
- Average steps per episode: ~25
- Success rate (deliver both packages within 500 steps): 100%

#### Double Q-Learning Performance (5,000 episodes)
- Converged near the same threshold (average final reward +185)
- Average steps: ~25
- Comparable performance to Q-Learning for a deterministic layout—overestimation bias has little to correct because transitions are fully predictable

### 6.2 Stochastic Environment

#### Hyperparameters
- alpha = 0.1
- gamma = 0.95  
- epsilon_start = 1.0
- epsilon_decay = 0.9999
- epsilon_min = 0.01
- episodes = 50,000
- max_steps = 1,000

#### Q-Learning Results
- Evaluation over 20 test episodes (greedy policy): **18/20 successful deliveries**
- Average Reward (last 1,000 training episodes): ~+135 (reduced from +185 due to wind/bird penalties and occasional forced detours)
- Average Steps (successful episodes): ~35–45 (longer than deterministic due to random disruptions)

#### Double Q-Learning Results (same 50,000 training episodes)
- Evaluation over 20 test episodes: **9/20 successful deliveries**
- Average Reward (last 1,000 training episodes): ~+130 (often overestimates values during learning, leading to suboptimal exploration)
- Average Steps (successful episodes): ~40–55

### 6.2.1 Analysis of Stochastic Performance

#### Q-Learning's Edge
- Even though Q-Learning can overestimate action values, in noisy environments the simultaneous selection and evaluation of actions allowed it to adapt faster to random changes (tornado movement, wind shifts, bird collisions)
- Fast exploration (high ε) combined with gradual decay let Q-Learning sample many diverse scenarios, updating its Q-table more robustly

#### Double Q-Learning's Challenges
- By splitting updates between Q1 and Q2, each table received only half as many updates per episode
- In high-variance transitions (wind pushes 70% of the time, bird collisions random), the decoupling slowed convergence—updates oscillated between two tables, leading to instability
- Even after 50,000 episodes, many (state,action) pairs remained poorly estimated, causing greedy testing to fail in nearly half of the episodes

**Key Takeaway**: For environments with moderate stochasticity (moving obstacles, random wind pushes), standard Q-Learning often outperforms Double Q-Learning unless the latter is trained for significantly more episodes or with tailored exploration strategies.

---

## 7. Reward Shaping and Its Impact

### Initial Problems (Without Proper Penalty Shaping)

During initial trials, the agent:
- Wandered around the grid to avoid the tornado, incurring many step costs (–2 each)
- Oscillated between two adjacent safe cells when confronted with wind cells (no penalty for repeating moves)
- Attempted Random Drops/Pickups without learning the correct sequence

### Implemented Shaping Terms

1. **Step Penalty (–2)**: Encouraged shortest paths
2. **Repeat-Move Penalty (–50)**: Prevented infinite loops between safe cells  
3. **Invalid Action Penalties (–25 for out-of-bounds or invalid pickups)**: Reduced random action attempts

### Results

The agent quickly learned a policy that picks up the nearest package first, delivers it, then returns for the second package, achieving consistently high cumulative rewards. Balanced shaping avoided "reward hacking" (e.g., purposely hovering to avoid birds) while still guiding the drone toward meaningful actions.

---

## 8. Conclusions & Future Work

### 8.1 Summary of Findings

#### 1. Environment Design
- A carefully specified 6×6 grid with deterministic and stochastic variants allowed us to test RL under predictable and unpredictable dynamics
- Clear safety checks (grid bounds, no-fly zones, valid pick/drop) ensured the agent never took illegal actions

#### 2. Reward System
- A combination of high positive rewards (deliveries, pickups) and structured penalties (step cost, collision, invalid actions, repetition) led to a stable training signal
- Without shaping, the agent either got stuck or produced suboptimal looping behaviors

#### 3. Tabular RL Performance
- **Deterministic Case**: Q-Learning and Double Q-Learning converged to optimal policies quickly, achieving +185 reward in ~25 steps
- **Stochastic Case**: Q-Learning outperformed Double Q-Learning under the same training budget, achieving ~90% success in evaluation episodes, while Double Q-Learning reached only ~45%

### 8.2 Lessons Learned

- **Balance Exploration and Exploitation**: A decaying ε-greedy approach was sufficient, but in highly stochastic states, more sophisticated exploration (e.g., upper-confidence bounds) might help
- **Reward Shaping Is Crucial**: Too few penalties yield wandering policies; too many harsh penalties can prevent any learning. Striking the right balance allowed consistent convergence
- **Double Q-Learning Trade-Offs**: While it reduces overestimation bias, it requires approximately twice the samples (or more episodes) to converge to the same performance as standard Q-Learning—especially in high-variance settings

### 8.3 Future Directions

#### 1. Function Approximation (Deep RL)
- Implement a Deep Q-Network (DQN) to generalize across similar grid states, reducing reliance on tabular storage (6,912 possible states)
- Advantage Actor-Critic (A2C) or PPO could further handle continuous adaptations to moving tornado/bird

#### 2. Hierarchical RL / Options
- Define high-level "options" such as "navigate to package," "avoid tornado," and "deliver package"
- A hierarchical policy might reduce sample complexity by reusing sub-policies

#### 3. Risk-Sensitive Reward
- Introduce risk-adjusted objectives (e.g., penalize frequent near-misses to tornado/bird more severely)
- Measure variance of returns to encourage robust policies that minimize worst-case scenarios

#### 4. Realistic Drone Dynamics
- Replace grid-world with a continuous 2D plane and smooth dynamics (inertia, velocity)
- Use a physics engine (e.g., PyBullet) to simulate wind turbulence, requiring continuous-action RL methods

## Conclusion

By starting with a fully specified tabular RL environment, we built a solid foundation for exploring more advanced RL techniques in both deterministic and stochastic settings. The insights gained here about reward shaping, exploration strategies, and algorithm selection will directly inform the design of more scalable and real-world-applicable RL agents.

---

## References

- [Gymnasium Toy Text Environments](https://gymnasium.farama.org/environments/toy_text/)
- [Gymnasium Environment Creation Tutorial](https://gymnasium.farama.org/tutorials/gymnasium_basics/environment_creation/)
- [Karpathy's Reinforce.js Tutorial](https://cs.stanford.edu/people/karpathy/reinforcejs/)`,
    },
  ],
};

export default portfolioData;
