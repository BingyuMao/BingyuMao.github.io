---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

[**Opportunities for AI-based Model-Informed Drug Development: A Comparative Analysis of NONMEM and AI-Based Models for Population Pharmacokinetic Prediction**](https://link.springer.com/article/10.1208/s12248-025-01121-x)

**Bingyu Mao**, Yue Gao, Christine Xu, Sreeraj Macha, Shuai Shao, Malidi Ahamadi

*The American Association of Pharmaceutical Scientists Journal, Nov 2025*

  <details>
  <summary>Abstract</summary>
Model-informed drug development (MIDD) plays an important role in pharmacometrics by analyzing clinical data using mathematical models to optimize drug dosing strategies. Traditional methods such as nonlinear mixed effects modeling (NONMEM) have long been the gold standard in population pharmacokinetic (PPK) modeling. However, the development of artificial intelligence (AI) presents a potential improvement in predictive accuracy and computational efficiency. This study evaluates the effectiveness of AI-based MIDD methods for PPK analysis, comparing them against traditional NONMEM models. We tested five machine learning (ML) models, three deep learning (DL) models, and a neural ordinary differential equations (ODE) model on both simulated and real clinical datasets under different scenarios, assessing accuracy with metrics such as root mean squared error (RMSE) and coefficient of determination (R²). Simulated datasets with known ground truth were created using a two-compartment model, while the real clinical dataset included data from 1,770 patients pooled from multiple clinical trials. Results indicate that AI/ML models often outperform NONMEM, with variations in performance depending on model type and data characteristics. Neural ODE models showed good performance, providing high accuracy and explainability with large datasets. This work provides valuable insights into the relative strengths and future applications of AI/ML in PPK modeling. <br/>
</details>


[**Evaluating the Impact of AI-Based Model-Informed Drug Development (MIDD): A Comparative Review**](https://link.springer.com/article/10.1208/s12248-025-01075-0)

**Bingyu Mao**, Yue Gao, Christine Xu, Sreeraj Macha, Shuai Shao, Malidi Ahamadi

*The American Association of Pharmaceutical Scientists Journal, Jun 2025*

  <details>
  <summary>Abstract</summary>
Model-informed drug development (MIDD) methods play critical role to ensure development of efficacious, and safe individualized therapies. The application of artificial intelligence/machine learning (AI/ML) within the field of drug development has exponentially expanded. Integrating AI/ML into traditional pharmacometrics approaches or using AI/ML as a stand-alone tool has the potential to optimize dosing strategies, inform clinical trial designs, and enhance robustness of quantitative assessments of drug efficacy and safety. <br/>
  
This review systematically evaluates the impact of AI-based model-informed drug development (MIDD) methods compared to traditional approaches by blending regulatory perspectives. We conducted a systematic search on PubMed using five Medical Subject Headings (MeSH) terms and included 67 relevant studies in the analysis. The results indicate that AI models have the potential of improving MIDD approaches through different stages of drug development to inform decision-making in clinical trials. However, limitations such as the lack of standardized evaluation metrics and standardized regulatory guidelines on the use of AI-based MIDD methods were noted. Overall, this review highlights the potential applications of AI in drug development and provides a foundation for future research to optimize and integrate AI-based approaches in this field. <br/>
</details>


[**Deep learning model for personalized prediction of positive MRSA culture using time-series electronic health records**](https://www.nature.com/articles/s41467-024-46211-0) 

Masayuki Nigo, Laila Rasmy, **Bingyu Mao**, Bijun Sai Kannadath, Ziqian Xie,  Degui Zhi

*Nature Communications, Mar 2024*

  <details>
  <summary>Abstract</summary>
Methicillin-resistant Staphylococcus aureus (MRSA) poses significant morbidity and mortality in hospitals. Rapid, accurate risk stratification of MRSA is crucial for optimizing antibiotic therapy. Our study introduced a deep learning model, PyTorch_EHR, which leverages electronic health record (EHR) time-series data, including wide-variety patient specific data, to predict MRSA culture positivity within two weeks. 8,164 MRSA and 22,393 non-MRSA patient events from Memorial Hermann Hospital System, Houston, Texas are used for model development. PyTorch_EHR outperforms logistic regression (LR) and light gradient boost machine (LGBM) models in accuracy (AUROC_PyTorch_EHR = 0.911, AUROC_LR = 0.857, AUROC_LGBM = 0.892). External validation with 393,713 patient events from the Medical Information Mart for Intensive Care (MIMIC)-IV dataset in Boston confirms its superior accuracy (AUROC_PyTorch_EHR = 0.859, AUROC_LR = 0.816, AUROC_LGBM = 0.838). Our model effectively stratifies patients into high-, medium-, and low-risk categories, potentially optimizing antimicrobial therapy and reducing unnecessary MRSA-specific antimicrobials. This highlights the advantage of deep learning models in predicting MRSA positive cultures, surpassing traditional machine learning models and supporting clinicians’ judgments. <br/>
</details>


[**PK-RNN-V E: A Deep Learning Model Approach to Vancomycin Therapeutic Drug Monitoring Using Electronic Health Record Data**](https://www.sciencedirect.com/science/article/pii/S1532046422001782?via%3Dihub) 

Masayuki Nigo, Hong Thoai Nga Tran, Ziqian Xie, Han Feng, **Bingyu Mao**,  Laila Rasmy, Hongyu Miao,  Degui Zhi

*Journal of Biomedical Informatics, Aug 2022*

  <details>
  <summary>Abstract</summary>
Vancomycin is a commonly used antimicrobial in hospitals, and therapeutic drug monitoring (TDM) is required to optimize its efficacy and avoid toxicities. Bayesian models are currently recommended to predict the antibiotic levels. These models, however, although using carefully designed lab observations, were often developed in limited patient populations. The increasing availability of electronic health record (EHR) data offers an opportunity to develop TDM models for real-world patient populations. <br/>

Here, we present a deep learning-based pharmacokinetic prediction model for vancomycin (PK-RNN-V E) using a large EHR dataset of 5,483 patients with 55,336 vancomycin administrations. PK-RNN-V E takes the patient’s real-time sparse and irregular observations and offers dynamic predictions. Our results show that RNN-PK-V E offers a root mean squared error (RMSE) of 5.39 and outperforms the traditional Bayesian model (VTDM model) with an RMSE of 6.29. We believe that PK-RNN-V E can provide a pharmacokinetic model for vancomycin and other antimicrobials that require TDM. <br/>
</details>


[**Recurrent neural network models (CovRNN) for predicting outcomes of patients with COVID-19 on admission to hospital: model development and validation using electronic health record data**](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(22)00049-8/fulltext) 

Laila Rasmy, Masayuki Nigo, Bijun Sai Kannadath, Ziqian Xie, **Bingyu Mao**, Khush Patel, Yujia Zhou, Wanheng Zhang, Angela Ross, Hua Xu, Degui Zhi

*The Lancet Digital Health, Apr 2022*

  <details>
  <summary>Abstract</summary>
Predicting outcomes of COVID-19 patients at an early stage is critical for optimized clinical care and resource management, especially during a pandemic. Although multiple machine learning models have been proposed to address this issue, based on the need for extensive data pre-processing and feature engineering, these models have not been validated or implemented outside of the original study site. <br/>

In this study, we developed recurrent neural network-based models (CovRNN) to predict the outcomes of patients with COVID-19 by use of available electronic health record data on admission to hospital, without the need for specific feature selection or missing data imputation. CovRNN was designed to predict three outcomes: in-hospital mortality, need for mechanical ventilation, and prolonged hospital stay (>7 days). For in-hospital mortality and mechanical ventilation, CovRNN produced time-to-event risk scores (survival prediction; evaluated by the concordance index) and all-time risk scores (binary prediction; area under the receiver operating characteristic curve AUROC was the main metric); we only trained a binary classification model for prolonged hospital stay. For binary classification tasks, we compared CovRNN against traditional machine learning algorithms: logistic regression and light gradient boost machine. Model performance was evaluated in the multi-hospital test set. <br/>

CovRNN binary models achieved AUROCs of 93·0% (95% CI 92·6–93·4) for the prediction of in-hospital mortality, 92·9% (92·6–93·2) for the prediction of mechanical ventilation, and 86·5% (86·2–86·9) for the prediction of a prolonged hospital stay, outperforming light gradient boost machine and logistic regression algorithms. External validation confirmed AUROCs in similar ranges (91·3–97·0% for in-hospital mortality prediction, 91·5–96·0% for the prediction of mechanical ventilation, and 81·0–88·3% for the prediction of prolonged hospital stay). For survival prediction, CovRNN achieved a concordance index of 86·0% (95% CI 85·1–86·9) for in-hospital mortality and 92·6% (92·2–93·0) for mechanical ventilation. <br/>
</details>


## In progress
[**A deep-learning-based two-compartment predictive model (PKRNN-2CM) for vancomycin therapeutic drug monitoring**](https://www.medrxiv.org/content/10.1101/2024.01.30.24302025v1) 

**Bingyu Mao**, Ziqian Xie, Masayuki Nigo, Laila Rasmy, Degui Zhi

*MedRxiv, January 2024*

  <details>
  <summary>Abstract</summary>
Objective: Vancomycin is a widely used antibiotic that requires therapeutic drug monitoring (TDM) for optimized individual dosage. The deep learning-based model PKRNN-1CM has shown the advantage of leveraging time series electronic health record (EHR) data for individualized estimation of vancomycin pharmacokinetic (PK) parameters. While one-compartment (1CM) PK models are commonly used because of their simplicity and previous trough-based clinical practices for dose adjustment, the pre-deep learning literature suggests the superiority of two-compartment models (2CM). Motivated by this, we introduce a novel deep-learning-based approach, PKRNN-2CM, for vancomycin TDM. <br/>
    
Methods: PKRNN-2CM combines RNN-driven PK parameter estimation with a 2CM PK model to predict vancomycin concentration trajectories. Training on both simulated data and real-world EHR data allows for a comprehensive evaluation of its performance. <br/>

Results: Experiments based on simulated data highlight PKRNN-2CM's superiority over the simpler 1CM model PKRNN-1CM (PKRNN-2CM RMSE=1.30, PKRNN-1CM RMSE=2.50). Application to real data showcases significant improvement over PKRNN-1CM (PKRNN-2CM RMSE=5.62, PKRNN-1CM RMSE=5.84, two-sample unpaired t-test p-value=0.01), with potential further gains expected with non-trough level measurements.  <br/>

Conclusion: PKRNN-2CM is an important improvement in vancomycin TDM, demonstrating enhanced accuracy and performance compared to the PKRNN-1CM model. This deep learning model holds potential for future individualized vancomycin TDM optimization and broader application in diverse clinical scenarios. <br/>
</details>

**Do we still need specialized clinical foundation models? Evaluation of fine-tuned generalist large language models vs. specialized clinical foundation models based on structured EHR for disease risk prediction tasks**

**Bingyu Mao**, Ziqian Xie, Jianping He, Michael Ghebranious, Made K. Prasadha, Degui Zhi, Laila Rasmy

*NEJM AI* (To be submitted soon)

  <details>
  <summary>Abstract</summary>
Backgrounds: With the wide adoption of electronic health records (EHRs), building models predicting clinical outcomes from EHR data is a promising way to deliver value to the learning healthcare system. While models can be developed from individual hospitals' data sources, a recent trend is to develop clinical foundation models (CFMs), deep learning AI models that are pre-trained on large and potentially heterogeneous data sources to, that can boost the performance of predictive models trained with only local data. Interestingly, the rise of large language models (LLMs) has introduced a new frontier in healthcare. LLMs are much larger models than CFMs, and trained on much richer data sets, and potentially deliver a superior performance than CFMs. It is thus a timely question, what is the best type of model for predictive modeling, CFMs or LLMs? <br/>
    
Methods: In this study, we fine-tuned both CFMs and LLMs to predict disease risk using established EHR cohorts. Specifically, we compared CFMs such as Med-BERT and CLMBR against general-purpose LLMs like Mistral and LLaMA, as well as a clinical LLM (CLLM), Me-LLaMA. Classifiers were built on top of these fine-tuned models to predict the risk of pancreatic cancer (PaCa) and heart failure among diabetic patients (DHF). We evaluated the models using the same cohorts as the Med-BERT study, in addition to a similar cohort from the EHRSHOT dataset, and assessed performance based on discriminative accuracy measured primarily by the area under the receiver operating characteristic curve (AUROC) and the area under the precision-recall curve (AUPRC). <br/>

Results: On the EHR and claims datasets, specialized CFMs exhibited significantly better performance compared to LLMs, with Med-BERT achieving an AUROC of 80.57 for the PaCa task on the claims dataset while the CLLM Me-LLaMA achieved 79.87 as the highest performance from LLMs (p=0.0013). Additionally, Med-BERT gave an AUROC of 85.39 for DHF prediction on the EHR dataset, compared to the best LLM LLaMA-3.1-70B’s AUROC of 84.73 (p=0.00045). On the EHRSHOT dataset with experiments based on limited patient information, fine-tuned generalist LLMs achieved marginally higher AUROCs (AUROC from the best LLM vs. CFM: 86.1 vs. 85.25 for the diagnosis-only format, AUROC from the best LLM vs. CFM: 86.65 vs. 86.33 for the combined diagnosis, medication, and procedure format); however, the differences were not statistically significant (p=0.27 and 0.58, respectively). Despite this, CFMs and traditional ML models achieved higher AUPRCs in EHRSHOT experiments. Med-BERT achieved the highest AUPRC of 55.85 for the diagnosis-only format while the best LLM provided 41.14. CLMBR achieved the highest AUPRC of 54.9 for the combined diagnosis, medication, and procedure format, while the best LLM provided 49.07. <br/>

Conclusion: Our findings indicate that, while generalist LLMs show promise in specific cases especially when using newer versions, specialized CFMs consistently deliver superior predictive accuracy on large, complex structured EHR data. In particular, Med-BERT and CLMBR achieved significantly higher AUROCs for both PaCa and DHF tasks, highlighting their important role in clinical predictive modeling. This suggests that the choice of model for clinical disease risk prediction tasks should be driven by the complexity and volume of available data. These insights provide a valuable foundation for future research and clinical decision-making, guiding the selection and optimization of clinical predictive modeling. <br/>
</details>


