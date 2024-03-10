---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: false
---

[**Deep learning model for personalized prediction of positive MRSA culture using time-series electronic health records**](https://www.nature.com/articles/s41467-024-46211-0) 

Masayuki Nigo, Laila Rasmy, **Bingyu Mao**, Bijun Sai Kannadath, Ziqian Xie,  Degui Zhi

*Nature Communications, March 2024*

  <details>
  <summary>Abstract</summary>
Methicillin-resistant Staphylococcus aureus (MRSA) poses significant morbidity and mortality in hospitals. Rapid, accurate risk stratification of MRSA is crucial for optimizing antibiotic therapy. Our study introduced a deep learning model, PyTorch_EHR, which leverages electronic health record (EHR) time-series data, including wide-variety patient specific data, to predict MRSA culture positivity within two weeks. 8,164 MRSA and 22,393 non-MRSA patient events from Memorial Hermann Hospital System, Houston, Texas are used for model development. PyTorch_EHR outperforms logistic regression (LR) and light gradient boost machine (LGBM) models in accuracy (AUROC_PyTorch_EHR = 0.911, AUROC_LR = 0.857, AUROC_LGBM = 0.892). External validation with 393,713 patient events from the Medical Information Mart for Intensive Care (MIMIC)-IV dataset in Boston confirms its superior accuracy (AUROC_PyTorch_EHR = 0.859, AUROC_LR = 0.816, AUROC_LGBM = 0.838). Our model effectively stratifies patients into high-, medium-, and low-risk categories, potentially optimizing antimicrobial therapy and reducing unnecessary MRSA-specific antimicrobials. This highlights the advantage of deep learning models in predicting MRSA positive cultures, surpassing traditional machine learning models and supporting clinicians’ judgments. <br/>
</details>




[**PK-RNN-V E: A Deep Learning Model Approach to Vancomycin Therapeutic Drug Monitoring Using Electronic Health Record Data**](https://www.sciencedirect.com/science/article/pii/S1532046422001782?via%3Dihub) 

Masayuki Nigo, Hong Thoai Nga Tran, Ziqian Xie, Han Feng, **Bingyu Mao**,  Laila Rasmy, Hongyu Miao,  Degui Zhi

*Journal of Biomedical Informatics, August 2022*

  <details>
  <summary>Abstract</summary>
Vancomycin is a commonly used antimicrobial in hospitals, and therapeutic drug monitoring (TDM) is required to optimize its efficacy and avoid toxicities. Bayesian models are currently recommended to predict the antibiotic levels. These models, however, although using carefully designed lab observations, were often developed in limited patient populations. The increasing availability of electronic health record (EHR) data offers an opportunity to develop TDM models for real-world patient populations. <br/>

Here, we present a deep learning-based pharmacokinetic prediction model for vancomycin (PK-RNN-V E) using a large EHR dataset of 5,483 patients with 55,336 vancomycin administrations. PK-RNN-V E takes the patient’s real-time sparse and irregular observations and offers dynamic predictions. Our results show that RNN-PK-V E offers a root mean squared error (RMSE) of 5.39 and outperforms the traditional Bayesian model (VTDM model) with an RMSE of 6.29. We believe that PK-RNN-V E can provide a pharmacokinetic model for vancomycin and other antimicrobials that require TDM. <br/>
</details>


[**Recurrent neural network models (CovRNN) for predicting outcomes of patients with COVID-19 on admission to hospital: model development and validation using electronic health record data**](https://www.thelancet.com/journals/landig/article/PIIS2589-7500(22)00049-8/fulltext) 

Laila Rasmy, Masayuki Nigo, Bijun Sai Kannadath, Ziqian Xie, **Bingyu Mao**, Khush Patel, Yujia Zhou, Wanheng Zhang, Angela Ross, Hua Xu, Degui Zhi

*The Lancet Digital Health, April 2022*

  <details>
  <summary>Abstract</summary>
Predicting outcomes of COVID-19 patients at an early stage is critical for optimized clinical care and resource management, especially during a pandemic. Although multiple machine learning models have been proposed to address this issue, based on the need for extensive data pre-processing and feature engineering, these models have not been validated or implemented outside of the original study site. <br/>

In this study, we developed recurrent neural network-based models (CovRNN) to predict the outcomes of patients with COVID-19 by use of available electronic health record data on admission to hospital, without the need for specific feature selection or missing data imputation. CovRNN was designed to predict three outcomes: in-hospital mortality, need for mechanical ventilation, and prolonged hospital stay (>7 days). For in-hospital mortality and mechanical ventilation, CovRNN produced time-to-event risk scores (survival prediction; evaluated by the concordance index) and all-time risk scores (binary prediction; area under the receiver operating characteristic curve AUROC was the main metric); we only trained a binary classification model for prolonged hospital stay. For binary classification tasks, we compared CovRNN against traditional machine learning algorithms: logistic regression and light gradient boost machine. Model performance was evaluated in the multi-hospital test set. <br/>

CovRNN binary models achieved AUROCs of 93·0% (95% CI 92·6–93·4) for the prediction of in-hospital mortality, 92·9% (92·6–93·2) for the prediction of mechanical ventilation, and 86·5% (86·2–86·9) for the prediction of a prolonged hospital stay, outperforming light gradient boost machine and logistic regression algorithms. External validation confirmed AUROCs in similar ranges (91·3–97·0% for in-hospital mortality prediction, 91·5–96·0% for the prediction of mechanical ventilation, and 81·0–88·3% for the prediction of prolonged hospital stay). For survival prediction, CovRNN achieved a concordance index of 86·0% (95% CI 85·1–86·9) for in-hospital mortality and 92·6% (92·2–93·0) for mechanical ventilation. <br/>
</details>


## Preprints
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
