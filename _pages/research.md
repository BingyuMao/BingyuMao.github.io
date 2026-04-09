---
layout: archive
title: "Research"
permalink: /research/
author_profile: false
---


## Presentations


[**A deep-learning-based two-compartment predictive model (PKRNN-2CM) for vancomycin therapeutic drug monitoring**](https://www.computer.org/csdl/proceedings-article/ichi/2023/026300a484/1SN7pSdD8WY) 

**Bingyu Mao**, Ziqian Xie, Laila Rasmy, Masayuki Nigo, Degui Zhi

*2023 IEEE 11th International Conference on Healthcare Informatics (ICHI), Houston, TX* 

  <details>
  <summary>Abstract</summary>
Vancomycin is a widely used antibiotic that requires therapeutic drug monitoring (TDM) for optimized individual dosage. The pharmacokinetic (PK) parameters for vancomycin TDM can be estimated using deep learning techniques that have the advantage of handling irregularly sampled time series electronic health record (EHR) data. When developing population vancomycin PK models in adults, a two-compartment model is most commonly considered. This study developed a two-compartment vancomycin TDM model (PKRNN-2CM) with recurrent neural network (RNN) to predict vancomycin concentration and compared its performance with a one-compartment deep-learning predictive model (PKRNN). A p-value of 0.01 indicates that the PKRNN-2CM model outperformed the PKRNN model. Additional model evaluation done with simulation demonstrate the superiority of the PKRNN-2CM model, even at unsampled time points. Our findings have the potential to improve the accuracy and effectiveness of personalized vancomycin TDM, leading to better clinical outcomes for patients receiving vancomycin. <br/>
</details>


[**Med-BERT v2: clinical foundation model on standardized secondary clinical data**](/files/MBV2.pdf)

Laila Rasmy, Yan Chu, **Bingyu Mao**, Khush Patel, Zhao Li, Hao Yan, Ziqian Xie, Wenjin Zheng, Hua Xu, Degui Zhi

*Machine Learning For Healthcare 2022, Durham, NC* 

  <details>
  <summary>Abstract</summary>
Deep learning (DL) based predictive models from electronic health records (EHR) deliver impressive performance in many clinical tasks. The need for large training cohorts, however, are often required, hindering the adoption of DL-based models in scenarios with limited training data size. In our previous work, we showed that <a href= "https://github.com/ZhiGroup/Med-BERT"> Med-BERT </a> trained on patients diagnoses data in standard ICD codes from more than 20 million patients’ EHR substantially improves the prediction accuracy for tasks with small cohorts. Med-BERT improved the discriminative accuracy of tasks with fine-tuning training sets of a few hundred samples boosting the AUC by more than 20% or equivalent to the AUC of 10 times larger training sets. <br/>

Adding more patient information including medications and procedures are known to further increase the prediction accuracy for many clinical tasks. However, when we use the earlier version of Med-BERT trained on diagnoses information alone and add to it randomly initialized embeddings for medications and procedures, the magnitude of performance boost it offers deteriorates. Therefore, we trained a new version of Med-BERT adding medications and procedures data. Additionally, we compared the performance of the Med-BERT model trained on claims data (MBv2-Claims) versus the model originally trained on EHR data (MBv2-EHR) to evaluate the generalizability of our approach as well as the generalizability of the pre-trained model. <br/>
</details>


## Posters

[**Technical Performance Evaluation of a Deep Learning-based Vancomycin Therapeutic Drug Monitoring Model**](/files/PKRNN_Poster.pdf)

**Bingyu Mao**, Masayuki Nigo, Hong Thoai Nga Tran, Ziqian Xie, Han Feng, Laila Rasmy, Hongyu Miao, Degui Zhi

*AMIA 2022 Informatics Summit, Chicago, IL* 

  <details>
  <summary>Abstract</summary>
Vancomycin therapeutic drug monitoring is recommended by national guidelines. We developed a deep learning-based pharmacokinetic model for personalized vancomycin level prediction (PK-RNN-V) using readily available electronic medical records data which achieves more accurate results than the current Bayesian models in the use for precision dosing. We will present our technical performance evaluation results of our PK-RNN-V models against the Bayesian model (VTDM) using Root Mean Square Error, Mean Absolute Error, and Mean Absolute Percentage Error. <br/>
</details>


[**A multi-aspect technical performance evaluation of deep learning based models for predicting COVID-19 patients outcomes on admission**](/files/CovRNN_poster.pdf)

Laila Rasmy, Masayuki Nigo, Bijun Sai Kannadath, Ziqian Xie, **Bingyu Mao**, Angela Ross, Hua Xu, Degui Zhi

*AMIA 2022 Informatics Summit, Chicago, IL* 

  <details>
  <summary>Abstract</summary>
While a comprehensive evaluation plan needs to be agreed on during the early phase of prediction task definition, we propose six factors that need to be considered during the evaluation of the implementability of a predictive model. Those factors are prediction performance, transparency, generalizability, data mechanics, efficiency, and data privacy. Those factors should be considered starting from phases 0, 1 as described in the AI evaluation framework1 and continuously monitored and improved as we go through all phases till phase 4. <br/>
</details>


## Academic Projects

<details markdown="1">
<summary>Biomedical Informatics</summary>

[BMI 6313](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-6313.htm) Scientific Writing in Healthcare ([Poster](/files/6313Poster.pdf))

[BMI 7302](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-7302.htm) Theories and Frameworks for Biomedical Informatics Research ([Poster](/files/7302Poster.pdf))

[BMI 7303](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-7303.htm) Critical Review of Biomedical Informatics Literature Seminar ([Poster](/files/7303Poster.pdf))

[BMI 7304](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-7304.htm) Advanced Research Design for Biomedical Informatics ([Poster](/files/7304Poster.pdf))

</details>

<details markdown="1">
<summary>Data Science</summary>

[BMI 5007](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-5007.htm) Methods in Health Data Science ([Code Repository](https://github.com/BingyuMao/mtds_health_data))

[BMI 6318](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-6318.htm) Big Data in Biomedical Informatics ([Code Repository](https://github.com/BingyuMao/big_data_hw))

[BMI 6319](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-6319.htm) Data Analysis for Scientific Research in Biomedical Informatics ([Code Repository](https://github.com/BingyuMao/model_comparison_mimic))

[BMI 6334](https://sbmi.uth.edu/current-students/catalog-of-courses-bmi/bmi-6334.htm) Deep Learning in Biomedical Informatics ([Code Repository](https://github.com/BingyuMao/deep_course_hws))

</details>

<details markdown="1">
<summary>Statistics</summary>

PH 1976 Fundamentals of Data Analytics and Predictions ([Code Repository](https://github.com/BingyuMao/pd_proj))

</details>

