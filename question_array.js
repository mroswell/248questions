const questions = [
    {
        id: 1,
        category: "regulatory",
        subcategory: "labeling",
        question: "Please confirm that neither label includes the indication that the vaccine reduces \"the risk of death, hospitalization and serious illness\" of COVID-19 disease.",
        page: 5,
        section: "2.1"
    },
    {
        id: 2,
        category: "regulatory",
        subcategory: "evidence",
        question: "Has FDA reviewed data that meet the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations\" and support the claim that either vaccine reduces \"the risk of death, hospitalization and serious illness\" of COVID-19 disease. Please provide.",
        page: 5,
        section: "2.1"
    },
    {
        id: 3,
        category: "regulatory",
        subcategory: "evidence",
        question: "If FDA considers the data it has reviewed as supporting the claim that either vaccine reduces \"the risk of death, hospitalization and serious illness\" of COVID-19 disease and meeting the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations,\" please state whether they do so according to the evidentiary standards set forth in FDA's 1998 guidance (19) or or according to later 2019 (20) and 2023 (21) documents that expand the scope of the types of data that can be used to support certain claims or expanded indications.",
        page: 6,
        section: "2.1"
    },
    {
        id: 4,
        category: "regulatory",
        subcategory: "evidence",
        question: "If FDA has reviewed data that do not meet the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations\" but purports to support this claim, please provide the data and state the evidentiary standard such data meet, if at all.",
        page: 6,
        section: "2.1"
    },
    {
        id: 5,
        category: "regulatory",
        subcategory: "evidence",
        question: "If FDA has reviewed data that do not meet the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations\" please describe the deficiencies in the data that preclude the inclusion of language asserting that the COVID-19 vaccines reduce \"the risk of death, hospitalization and serious illness\" of COVID-19 disease",
        page: 6,
        section: "2.1"
    },
    {
        id: 6,
        category: "regulatory",
        subcategory: "labeling",
        question: "Please advise whether, in the absence of data meeting the \"substantial evidence\" standard as well as authorization by FDA of a labeling change to include a claim that the vaccine reduces \"the risk of death, hospitalization and serious illness\" of COVID-19 disease, manufacturers making such a claim would be in violation of statues and regulations regarding off-label promotion? How is your answer influenced by FDA's draft guidance on Scientific Information on Unapproved Uses (SIUU)? (22)",
        page: 6,
        section: "2.1"
    },
    {
        id: 7,
        category: "regulatory",
        subcategory: "guidance",
        question: "What is the regulatory status of Dr. Marks' (4) statement regarding a \"dramatic reduction in the risk of death, hospitalization and serious illness afforded by the vaccines\"? Coming from Dr. Marks, a senior FDA official, does this represent an amendment to the approved labeling, a regulatory guidance, an enforcement policy, SIUU, or personal medical opinion?",
        page: 6,
        section: "2.1"
    },
    {
        id: 8,
        category: "regulatory",
        subcategory: "labeling",
        question: "Although this draft guidance applies to sponsors, given Dr. Marks' statement concerning a \"dramatic reduction in the risk of death, hospitalization and serious illness afforded by the vaccines,\" and the absence of the corresponding claim in the package insert, is it FDA's intent that the modRNA COVID-19 vaccines be used to reduce these serious outcomes?",
        page: 6,
        section: "2.1"
    },
    {
        id: 9,
        category: "regulatory",
        subcategory: "labeling",
        question: "Per Question 8, if it is FDA's intent that the COVID-19 vaccines be used to reduce serious outcomes, would the issuance of such a statement on this use by FDA without the qualifying language concerning this unapproved use, misleadingly imply that this use had been approved by FDA?",
        page: 6,
        section: "2.1"
    },
    {
        id: 10,
        category: "regulatory",
        subcategory: "compliance",
        question: "Did the provision of EUA product to patients who were counseled that these products reduce the risk of death or serious outcomes, violate the provider agreement, which requires that the provider must confine representations to those consistent with the contents of the Fact Sheet (eg (23,24)) ?",
        page: 6,
        section: "2.1"
    },
    {
        id: 11,
        category: "regulatory",
        subcategory: "labeling",
        question: "Please confirm that the above excerpts do appear in the respective package inserts.",
        page: 7,
        section: "2.2"
    },
    {
        id: 12,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Has FDA reviewed data that meet the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations\" and support the claim that either vaccine is safe and effective for use in pregnancy or lactation. Please provide.",
        page: 7,
        section: "2.2"
    },
    {
        id: 13,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "If FDA considers the data it has reviewed as supporting the claim that either modRNA vaccine is safe and effective for use in pregnancy and meeting the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations,\" please state whether they do so according to the evidentiary standards set forth in FDA's 1998 guidance (19) or according to later 2019 (20) and 2023 (21) documents that expand the scope of the types of data that can be used to support certain claims or expanded indications.",
        page: 7,
        section: "2.2"
    },
    {
        id: 14,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "If FDA has reviewed data that do not meet the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations\" but purports to support this claim, please provide the data and state the evidentiary standard such data meet, if at all.",
        page: 7,
        section: "2.2"
    },
    {
        id: 15,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "If FDA has reviewed data that do not meet the standard of \"substantial evidence\" \"consisting of adequate and well-controlled investigations\" please describe the deficiencies in the data that preclude the removal of tempering labeling language and/or the inclusion of language asserting that the COVID-19 vaccines are safe and effective in pregnancy and lactation.",
        page: 7,
        section: "2.2"
    },
    {
        id: 16,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Please advise whether, in the absence of data meeting the \"substantial evidence\" standard as well as authorization by FDA of a labeling change to include a claim that the vaccine is safe and effective in pregnancy, manufacturers making such a claim would be in violation of statues and regulations regarding off-label promotion?",
        page: 7,
        section: "2.2"
    },
    {
        id: 17,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Please confirm that CDC's recommendation for use of the COVID-19 vaccines in pregnancy and lactation, along with CDC's representation that \"Evidence shows that: COVID-19 vaccination during pregnancy is safe and effective,\" is misleadingly inconsistent with the wording in the COMIRNATY and SPIKEVAX package inserts concerning insufficient data to inform vaccine-associated risks in pregnancy, whether the vaccines are excreted in breast milk, and the lack of data on the effects of the vaccines on the breastfed infant or on milk production/excretion.",
        page: 7,
        section: "2.2"
    },
    {
        id: 18,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Please confirm that the absence of prominent language detailing the risks of these products in pregnancy and lactation as described in FDA approved labeling, from CDC's related recommendations, exacerbates the misleading nature of these recommendations.",
        page: 8,
        section: "2.2"
    },
    {
        id: 19,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Please provide the contents and URLs of all current FDA and CDC web pages that discuss the use of these products in pregnancy and lactation. Please detail what steps will be taken to ensure that prominent language will be placed, if currently absent, detailing the risks of these products in pregnancy and lactation as described in FDA approved labeling.",
        page: 8,
        section: "2.2"
    },
    {
        id: 20,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Please confirm that FDA's endorsement of CDC's recommendation for use of the COVID-19 vaccines in pregnancy and lactation, along with CDC's related representations described above is misleadingly inconsistent with the wording in the COMIRNATY and SPIKEVAX package inserts concerning insufficient data to inform vaccine-associated risks in pregnancy, whether the vaccines are excreted in breast milk, and the lack of data on the effects of the vaccines on the breastfed infant or on milk production/excretion.",
        page: 9,
        section: "2.2"
    },
    {
        id: 21,
        category: "regulatory",
        subcategory: "pregnancy",
        question: "Please confirm that the absence of prominent language detailing the risks of these products in pregnancy and lactation as described in FDA approved labeling, from FDA's written and video endorsement of CDC's related recommendations, exacerbates the misleading nature of both FDA's endorsement and CDC's recommendations.",
        page: 9,
        section: "2.2"
    },
    {
        id: 22,
        category: "regulatory",
        subcategory: "compliance",
        question: "Did the provision of EUA product to patients who were counseled that these products were safe and effective for use in pregnancy and lactation violate the provider agreement, which requires that the provider must confine representations to those consistent with the contents of the Fact Sheet (eg (23,24)) ?",
        page: 9,
        section: "2.2"
    },
    {
        id: 23,
        category: "manufacturing",
        subcategory: "cgmp",
        question: "Did the Secretary of HHS authorize deviations from cGMP regarding the COVID-19 vaccines? Was this a general waiver for all COVID-19 vaccines or for specific vaccines and/or specific issues? Did such a waiver cover any cGMP issues stemming from the Process 1 to Process 2 change for Pfizer's product? Please provide a copy of all relevant cGMP waivers.",
        page: 11,
        section: "3.1"
    },
    {
        id: 24,
        category: "manufacturing",
        subcategory: "process",
        question: "When did FDA first learn that Pfizer would be changing from Process 1 to Process 2?",
        page: 11,
        section: "3.1"
    },
    {
        id: 25,
        category: "manufacturing",
        subcategory: "process",
        question: "After learning about Pfizer's process change, did FDA consider this change to constitute, absent a comparability analysis, grounds for a non-approvable status or the issuance of something akin to the EMA Major Objection?",
        page: 11,
        section: "3.1"
    },
    {
        id: 26,
        category: "manufacturing",
        subcategory: "process",
        question: "To what extent did the challenges related to Pfizer's process change contribute to FDA's change in regulatory approach from a BLA pathway described in the June 2020 guidance (32) to an EUA pathway described the October 2020 guidance (33)?",
        page: 11,
        section: "3.1"
    },
    {
        id: 27,
        category: "manufacturing",
        subcategory: "process",
        question: "Within the BLA framework described in the June 2020 guidance (32) what comparability requirements did FDA place or would have placed on Pfizer related to the proposed change in manufacturing process? How would these requirements differ under an EUA framework?",
        page: 11,
        section: "3.1"
    },
    {
        id: 28,
        category: "manufacturing",
        subcategory: "process",
        question: "What combination of provisions, akin to those adopted by EMA, such as GMP waivers, additional pre-EUA data provided by Pfizer, post-EUA obligations and commitments, did FDA make in order to obviate any delays in authorization or approval caused by the process change?",
        page: 12,
        section: "3.1"
    },
    {
        id: 29,
        category: "manufacturing",
        subcategory: "process",
        question: "Absent these provisions, by how long would the issuance of Pfizer's EUA have been delayed?",
        page: 12,
        section: "3.1"
    },
    {
        id: 30,
        category: "manufacturing",
        subcategory: "process",
        question: "Relating to this process change, did FDA request a risk assessment from Prizer? Was one provided and when? Did FDA conduct its own risk assessment? Was any risk assessment addressing this issue, if one exists, disclosed to VRBPAC or publicly. If not please provide.",
        page: 12,
        section: "3.1"
    },
    {
        id: 31,
        category: "regulatory",
        subcategory: "disclosure",
        question: "Please confirm that there is no reference to the Process 1 to Process 2 manufacturing change in the meeting materials for the VRBPAC meeting of December 10 2020. Was VRBPAC fully informed of the fact and details of the manufacturing change, including protocol Amendment 7, and if so when and in what form?",
        page: 12,
        section: "3.1"
    },
    {
        id: 32,
        category: "manufacturing",
        subcategory: "comparability",
        question: "What was the regulatory basis for authorizing a process change based on a descriptive comparability analysis involving 250 subjects per arm? Does this analysis meet the BLA \"substantial evidence\" or merely the EUA \"totality of evidence standard\"? If the answer is the latter, how is this lowered standard consistent with FDA's representation in its October 6 2020 (33) guidance and to VRBPAC on October 22, 2020 (38) that it would still require data \"from at least one well-designed Phase 3 clinical trial that demonstrates the vaccine's safety and efficacy in a clear and compelling manner\"?",
        page: 12,
        section: "3.1"
    },
    {
        id: 33,
        category: "regulatory",
        subcategory: "disclosure",
        question: "Regarding the process change, was VRBPAC fully informed and educated about the lowering of the \"substantial evidence\" or \"clear and compelling\" standards to a \"totality of evidence\" standard? When? In what form?",
        page: 12,
        section: "3.1"
    },
    {
        id: 34,
        category: "regulatory",
        subcategory: "disclosure",
        question: "Was VRBPAC fully informed and educated about the existence and details of any cGMP waivers? When and in what form? Other than the publication of Pfizer's study and protocol in the NEJM on the same day as the VRBPAC meeting, did VRBPAC members receive these materials prior to the December 10 2020 meeting?",
        page: 12,
        section: "3.1"
    },
    {
        id: 35,
        category: "manufacturing",
        subcategory: "process",
        question: "How many different lots of Process 2 Drug Product (DP) were deployed in Pfizer's pivotal trial C4591001? How many subjects received Process 2 DP (by lot number)?",
        page: 13,
        section: "3.2"
    },
    {
        id: 36,
        category: "manufacturing",
        subcategory: "process",
        question: "Please confirm the information provided by MHRA in their FOI response 23/510 that the first subject to receive Process 2 DP did so on October 18 2020. Please provide the date when the last subject to receive Process 2 DP did so.",
        page: 13,
        section: "3.2"
    },
    {
        id: 37,
        category: "manufacturing",
        subcategory: "comparability",
        question: "Please confirm the information provided in EMA's report (30) that the descriptive clinical comparability analysis was expected in February 2021. If this was not the case, what was the timeline for submission to FDA of Pfizer's descriptive clinical comparability analysis?",
        page: 13,
        section: "3.2"
    },
    {
        id: 38,
        category: "regulatory",
        subcategory: "authorization",
        question: "What was the regulatory basis for issuing Pfizer's EUA in the absence of this analysis?",
        page: 13,
        section: "3.2"
    },
    {
        id: 39,
        category: "regulatory",
        subcategory: "compliance",
        question: "What actions did FDA take when Pfizer failed to submit its descriptive clinical comparability analysis by the specified date?",
        page: 13,
        section: "3.2"
    },
    {
        id: 40,
        category: "regulatory",
        subcategory: "authorization",
        question: "What was the regulatory basis for re-issuing Pfizer's EUA with its various amendments including those involving booster shots and new variant versions in the absence of this analysis?",
        page: 13,
        section: "3.2"
    },
    {
        id: 41,
        category: "manufacturing",
        subcategory: "comparability",
        question: "Please confirm the information provided by MHRA in their FOI response 23/510 that this analysis was never conducted and submitted to FDA.",
        page: 13,
        section: "3.2"
    },
    {
        id: 42,
        category: "manufacturing",
        subcategory: "comparability",
        question: "Please confirm the information provided by MHRA in their FOI response 23/510 that analysis was removed from the protocol in amendment 20 in September 2022.",
        page: 13,
        section: "3.2"
    },
    {
        id: 43,
        category: "manufacturing",
        subcategory: "comparability",
        question: "What was the justification provided by Pfizer for not conducting or submitting this analysis? Please confirm that all or part of this justification is similar to that provided by MHRA in their FOI response 23/510 that this was \"due to the extensive usage of vaccines manufactured via \"Process 2.\"",
        page: 13,
        section: "3.2"
    },
    {
        id: 44,
        category: "regulatory",
        subcategory: "authorization",
        question: "Comparing and contrasting with Question 32 and noting FDA's 1998 (19), 2019 (20), and 2023 (21) guidance documents regarding evidentiary standards for clinical data, what is the regulatory basis for authorizing or approving a vaccine based on only one clinical study of DP made by a process that differs with DP currently used and made by a process for which there is no \"substantial evidence\" of clinical comparability \"consisting of adequate and well-controlled investigations.\"",
        page: 13,
        section: "3.2"
    },
    {
        id: 45,
        category: "regulatory",
        subcategory: "evidence",
        question: "If FDA is relying on \"extensive usage\" in a manner apparently similar to MHRA, is this intended to constitute Real World Evidence (RWE) that can support approvals under some circumstances only described in FDA's September 19 guidance? (21) Has this RWE been subject to the appropriate controls described in a guidance only recently (Aug 30, 2023)? (41)",
        page: 13,
        section: "3.2"
    },
    {
        id: 46,
        category: "manufacturing",
        subcategory: "process",
        question: "Was Process 2 DP used in any of Pfizer's other trials or sub-trials? If so, which?",
        page: 13,
        section: "3.2"
    },
    {
        id: 47,
        category: "manufacturing",
        subcategory: "quality",
        question: "Did FDA express any concern to Pfizer about any of the process-related issues identified above, including the poly(A) tail pattern. the 5' cap, mRNA integrity, dsRNA, the pattern and identity of RNA and truncated or fragmented RNA, and the identity and molecular weights of proteins expressed after modRNA transfection? How were these concerns resolved? What was the timeline of this process from FDA's first awareness, to FDA's expression of concern or questions, to Pfizer's response and to resolution?",
        page: 14,
        section: "3.3"
    },
    {
        id: 48,
        category: "manufacturing",
        subcategory: "quality",
        question: "Were there concerns similar to those listed in Question 47 regarding the Moderna product? Please describe.",
        page: 14,
        section: "3.3"
    },
    {
        id: 49,
        category: "regulatory",
        subcategory: "coordination",
        question: "Was FDA aware of the concerns expressed by EMA or other regulatory agencies on the subjects discussed in Question 47 and the actions they took to address them? When? Was there any consultation or coordination between agencies?",
        page: 14,
        section: "3.3"
    },
    {
        id: 50,
        category: "dna",
        subcategory: "dnase",
        question: "Did FDA express any concern to Pfizer about any issue related to residual DNA such as the robustness of the DNase digestion step. How were these concerns resolved? What was the timeline of this process from FDA's first awareness, to FDA's expression of concern or questions, to Pfizer's response and to resolution?",
        page: 16,
        section: "3.4"
    },
    {
        id: 51,
        category: "dna",
        subcategory: "timeline",
        question: "How is the continuing concern well into at least 2022 about residual DNA consistent with the issuance of COMIRNATY's BLA in August 2021 and the authorization of children's doses in October 2021?",
        page: 16,
        section: "3.4"
    },
    {
        id: 52,
        category: "dna",
        subcategory: "dnase",
        question: "Were there concerns similar to those listed in Question 50 regarding the Moderna product? Please describe.",
        page: 16,
        section: "3.4"
    },
    {
        id: 53,
        category: "regulatory",
        subcategory: "coordination",
        question: "Was FDA aware of the concerns expressed by EMA or other regulatory agencies on the subjects discussed in Question 50 and the actions they took to address them? When? Was there any consultation or coordination between agencies?",
        page: 16,
        section: "3.4"
    },
    {
        id: 54,
        category: "manufacturing",
        subcategory: "gmp",
        question: "Is FDA aware that \"GMP-like\" may have been used in the manufacture of Pfizer mRNA?",
        page: 17,
        section: "3.5"
    },
    {
        id: 55,
        category: "manufacturing",
        subcategory: "gmp",
        question: "For which phases of Pfizer COVID-19 vaccine preclinical, clinical and post EUA use was \"GMP-like\" plasmid used?",
        page: 17,
        section: "3.5"
    },
    {
        id: 56,
        category: "manufacturing",
        subcategory: "plasmid",
        question: "What was the source of Pfizer's plasmid and its GMP provenance (i.e. GMP, or GMP-like)? Was this obtained from Pfizer's Gene Therapy Division at the large-scale pDNA manufacturing facility in Chesterfield, MO? Was FDA aware of the source of plasmid?",
        page: 17,
        section: "3.5"
    },
    {
        id: 57,
        category: "manufacturing",
        subcategory: "gmp",
        question: "How does \"GMP-like\" plasmid differ from GMP-compliant plasmid?",
        page: 17,
        section: "3.5"
    },
    {
        id: 58,
        category: "manufacturing",
        subcategory: "gmp",
        question: "Regarding the COVID-19 mRNA vaccines, for what other preclinical, clinical and post EUA purposes were processes or materials \"GMP-like\" rather than \"GMP compliant? Were these instances of \"GMP-like\" a reflection of EUA regulations or FDA's non-enforcement of GMP requirements?",
        page: 17,
        section: "3.5"
    },
    {
        id: 59,
        category: "manufacturing",
        subcategory: "gmp",
        question: "Where there any instances of \"GMP-like\" processes or materials related to the development or manufacturing of the Moderna COVID-19 mRNA vaccine?",
        page: 17,
        section: "3.5"
    },
    {
        id: 60,
        category: "safety",
        subcategory: "preclinical",
        question: "For the Pfizer product, which process was used to make the drug product tested in the non-clinical pharmacology and toxicology studies described in the Summary Basis for Regulatory Action. (47) Was test article taken from clinical or commercial scale production material, or from especially conducted non-clinical runs?",
        page: 18,
        section: "3.6"
    },
    {
        id: 61,
        category: "safety",
        subcategory: "preclinical",
        question: "For the Pfizer product, which non-clinical studies were performed with the V8 version and which with the V9 version? Please confirm that the type made by both Processes 1 and 2 was the V9 type.",
        page: 18,
        section: "3.6"
    },
    {
        id: 62,
        category: "manufacturing",
        subcategory: "formulation",
        question: "For both the Pfizer and Moderna products, please summarize and tabulate differences in the composition of Drug Product used in non-clinical, clinical, and post-authorization COVID-10 vaccines, paying particular attention to the modRNA ORF sequence, sequence of non-coding regions, extent and type of nucleoside medication, pattern of codon optimization, LNP and buffer composition. Please indicate the reason for each change and what analytical, non-clinical or clinical comparability studies were performed to qualify these changes.",
        page: 18,
        section: "3.6"
    },
    {
        id: 63,
        category: "manufacturing",
        subcategory: "process",
        question: "For both the Pfizer and Moderna products, please summarize and tabulate all manufacturing changes from the formulation and process used to produce non-clinical test material to currently produced vaccine that may have changed the amount, type of size distribution of DNA or RNA in the final DP, the amount and type of impurities, as well as critical quality attributes and properties of the LNPs. Please indicate the reason for each change and what analytical, non-clinical or clinical comparability studies were performed to qualify these changes.",
        page: 18,
        section: "3.6"
    },
    {
        id: 64,
        category: "dna",
        subcategory: "integration",
        question: "In light of the above review of basic cell biology, and FDA's \"first principle\" premise of nuclear membrane inviolability, what studies have FDA conducted or solicited or will FDA be conducting or soliciting from Pfizer and Moderna regarding the intracellular kinetics of residual DNA?",
        page: 20,
        section: "4.2"
    },
    {
        id: 65,
        category: "dna",
        subcategory: "integration",
        question: "In light of the above attestations as to the risks of insertional mutagenesis, would FDA revise Dr. Marks' earlier statement concerning the plausibility of risk of chromosomal integration of residual DNA?",
        page: 22,
        section: "4.2"
    },
    {
        id: 66,
        category: "biodistribution",
        subcategory: "kinetics",
        question: "As with conventional pharmacokinetics (PK) (see 0Error! Reference source not found.), a full understanding of the cellular kinetics of any drug is essential to understand its pharmacology and toxicology and is not an academic nicety. What studies will FDA be conducting on its own, or soliciting from Pfizer or Moderna, regarding the intracellular kinetics of modRNA?",
        page: 23,
        section: "4.3"
    },
    {
        id: 67,
        category: "dna",
        subcategory: "reverse transcription",
        question: "In light of the above evidence, what studies is FDA conducting in its own labs, is aware of being undertaken by other government agencies, or is soliciting from Pfizer of Moderna to characterize the reverse transcription of vaccinal modRNA to DNA?",
        page: 24,
        section: "4.3"
    },
    {
        id: 68,
        category: "dna",
        subcategory: "reverse transcription",
        question: "In light of the above evidence, what assessments have FDA conducted, solicited from Pfizer of Moderna or received from elsewhere to characterize the risks of reverse transcription of vaccinal modRNA to DNA?",
        page: 24,
        section: "4.3"
    },
    {
        id: 69,
        category: "dna",
        subcategory: "integration",
        question: "What studies have FDA requested from Pfizer or Moderna to determine whether genomic insertion may occur with residual DNA or from reverse transcribed vaccinal modRNA after modRNA vaccine administration?",
        page: 25,
        section: "4.4"
    },
    {
        id: 70,
        category: "dna",
        subcategory: "integration",
        question: "What in vitro or in vivo models does FDA consider suitable to assess genomic integration of residual DNA, after appropriate validation?",
        page: 25,
        section: "4.4"
    },
    {
        id: 71,
        category: "dna",
        subcategory: "integration",
        question: "What studies have FDA conducted, or will conduct to determine whether genomic insertion may occur with residual DNA or from reverse transcribed vaccinal modRNA? Please provide details.",
        page: 25,
        section: "4.4"
    },
    {
        id: 72,
        category: "dna",
        subcategory: "oncogenesis",
        question: "Have FDA conducted studies using the models described in or adapted from Sheng-Fowler et al (96-98) to assess integration or oncogenesis after administration of the oncogene expression plasmids within the same or similar LNPs used in the Pfizer or Moderna COVID-19 vaccines? Please provide details.",
        page: 25,
        section: "4.4"
    },
    {
        id: 73,
        category: "dna",
        subcategory: "oncogenesis",
        question: "Have FDA conducted studies using the models described by or adapted from Sheng-Fowler et al (96-98) to assess integration or oncogenesis after co-administration of the oncogene expression plasmids and sequence elements from the plasmid vectors used for modRNA COVID-19 vaccine production? Please provide details.",
        page: 25,
        section: "4.4"
    },
    {
        id: 74,
        category: "dna",
        subcategory: "oncogenesis",
        question: "Have FDA conducted studies using the models described by or adapted from Sheng-Fowler et al (96-98) to assess integration or oncogenesis after co-administration of the oncogene expression plasmids and sequence elements from the plasmid vectors used for modRNA COVID-19 vaccine production within same or similar LNPs used I the COVID-19 vaccines? Please provide details.",
        page: 25,
        section: "4.4"
    },
    {
        id: 75,
        category: "dna",
        subcategory: "episomal",
        question: "What studies have FDA conducted, will conduct or have solicited from Pfizer or Moderna, to determine whether extrachromosomal expression or transmission of residual DNA occurs, and to determine the attendant risks, if detected?",
        page: 26,
        section: "4.5"
    },
    {
        id: 76,
        category: "safety",
        subcategory: "autoimmune",
        question: "Given that these guidelines did not contemplate the highly efficient transfection of nucleic acid by LNPs (see 6.2), please provide a justification as to why FDA's original (pre-2007) recommendation to conduct preclinical studies to assess vaccine-induced autoimmune disease should not be reinstated?",
        page: 27,
        section: "4.6"
    },
    {
        id: 77,
        category: "safety",
        subcategory: "autoimmune",
        question: "Has FDA conducted or solicited from Pfizer or Moderna a risk assessment related to vaccine -associated autoimmune disease?",
        page: 27,
        section: "4.6"
    },
    {
        id: 78,
        category: "regulatory",
        subcategory: "coordination",
        question: "Has FDA communicated with other US government agencies such as NIH or CDC about the risk of modRNA vaccine -associated autoimmune disease?",
        page: 27,
        section: "4.6"
    },
    {
        id: 79,
        category: "regulatory",
        subcategory: "coordination",
        question: "Is FDA aware of risk assessments or studies performed by other US government agencies such as NIH or CDC related to the risk of modRNA vaccine -associated autoimmune disease? What is the nature of this work?",
        page: 27,
        section: "4.6"
    },
    {
        id: 80,
        category: "dna",
        subcategory: "toxicity",
        question: "What studies or risk assessments has FDA conducted or will conduct, has solicited, or will solicit from Pfizer or Moderna, to determine the contribution of non-integrating mechanisms of toxicity of DNA to the overall safety profile of the modRNA vaccines?",
        page: 27,
        section: "4.6"
    },
    {
        id: 81,
        category: "dna",
        subcategory: "comparison",
        question: "What lessons regarding DNA toxicity can learned from the viral vector COVID-19 vaccines (Janssen, Astra-Zeneca) and applied to the toxicity of residual or reverse transcribed DNA associated with the modRNA vaccines?",
        page: 27,
        section: "4.6"
    },
    {
        id: 82,
        category: "dna",
        subcategory: "measurement",
        question: "Why does FDA consider the ratio of residual DNA to the amount of RNA relevant in determining the absolute risk of residual DNA in modRNA vaccines? Is this ratio used in the setting of specifications for Drug Substance or Drug Product? What is this specification?",
        page: 29,
        section: "6.1"
    },
    {
        id: 83,
        category: "dna",
        subcategory: "transfection",
        question: "What is FDA's estimate of the fold-increase of transfection for nucleic acid achieved by the LNPs used in the Pfizer and Moderna modRNA COVID-19 vaccine formulations?",
        page: 29,
        section: "6.2"
    },
    {
        id: 84,
        category: "dna",
        subcategory: "transfection",
        question: "Per Question 83, Is this estimate based on FDA's own studies? If so please describe those studies? If not, was this based on data provided by Pfizer and Moderna? Please provide details.",
        page: 29,
        section: "6.2"
    },
    {
        id: 85,
        category: "dna",
        subcategory: "limits",
        question: "If FDA permits an upward adjustment in the residual DNA limit in a case where less risk is perceived (i.e. oral dosing), what is FDA's rationale for not downwardly adjusting the residual DNA limit, in cases where there is more reason to be concerned (i.e. enhanced transfection using LNPs)?",
        page: 29,
        section: "6.2"
    },
    {
        id: 86,
        category: "biodistribution",
        subcategory: "dna",
        question: "What animal or human studies has FDA conducted or solicited from Pfizer or Moderna concerning the biodistribution of residual DNA, quantified in terms of number of copies? Please provide.",
        page: 30,
        section: "6.2"
    },
    {
        id: 87,
        category: "dna",
        subcategory: "risk assessment",
        question: "What algorithms does FDA use to compute integration risk based on the number of copies and sizes of DNA fragments, their distribution and persistence? Please provide details and a record of the calculations performed,",
        page: 30,
        section: "6.2"
    },
    {
        id: 88,
        category: "dna",
        subcategory: "risk assessment",
        question: "How does FDA characterize any possible integration risk for the purposes of determining \"safe\" exposure levels? For example, does FDA consider exposure to integration-competent DNA capable of producing an (mostly) irreversible effect similar to exposure to ionizing radiation, or rather as an exposure to a toxin that produces a concentration dependent reversible effect?",
        page: 30,
        section: "6.2"
    },
    {
        id: 89,
        category: "dna",
        subcategory: "dosing",
        question: "What algorithm does FDA use to adjust the limit of residual DNA per dose, based on FDA's characterization of risk (per Question 88), the pharmacokinetic properties of residual DNA within LNPs, the interval between multiple doses of COVID-19 vaccine, the interval and dose between the administration of conventional DNA-containing vaccines or non-COVID-19 modRNA vaccines that may be introduced in the future?",
        page: 30,
        section: "6.2"
    },
    {
        id: 90,
        category: "dna",
        subcategory: "measurement",
        question: "Please describe the method used to adjust raw estimates of residual DNA for amplicon length and amplification efficiency.",
        page: 30,
        section: "6.3"
    },
    {
        id: 91,
        category: "dna",
        subcategory: "measurement",
        question: "Please confirm which test methods are used to determine RNA and residual DNA in Drug Substance and Drug Product.",
        page: 31,
        section: "6.3"
    },
    {
        id: 92,
        category: "dna",
        subcategory: "measurement",
        question: "Please provide a justification for why UV or fluorescence methods have not been used to determine the amount of residual DNA, as they appear to be used to estimate RNA.",
        page: 31,
        section: "6.3"
    },
    {
        id: 93,
        category: "dna",
        subcategory: "measurement",
        question: "What are the sequences and lengths of amplicons used in the \"validated quantitative PCR assay\" you refer to that is used to estimate the amount of residual DNA?",
        page: 31,
        section: "6.3"
    },
    {
        id: 94,
        category: "dna",
        subcategory: "measurement",
        question: "For both Moderna and Pfizer, what is the smallest length of DNA that can be detected by the particular amplicons used, and under the assay conditions used, for the \"validated quantitative PCR assay\" used to estimate residual DNA?",
        page: 31,
        section: "6.3"
    },
    {
        id: 95,
        category: "dna",
        subcategory: "measurement",
        question: "What studies have FDA performed or solicited from Pfizer or Moderna to characterize the size distribution of residual DNA fragments as a function of amplicon length? Please provide.",
        page: 31,
        section: "6.3"
    },
    {
        id: 96,
        category: "dna",
        subcategory: "measurement",
        question: "What is the percentage of total residual DNA detected by qPCR?",
        page: 31,
        section: "6.3"
    },
    {
        id: 97,
        category: "dna",
        subcategory: "data",
        question: "Please supply the results of residual DNA assay in DS, or DP, for all lots of Pfizer-BionTech or Moderna EUA or BLA COVID-19 vaccines. Please provide the total number of doses supplied, and if known, administered, of each lot, within the USA. Please supply the date of first release for each lot.",
        page: 31,
        section: "6.3"
    },
    {
        id: 98,
        category: "dna",
        subcategory: "contamination",
        question: "What measures have been taken to reduce the level of residual DNA contamination?",
        page: 31,
        section: "6.3"
    },
    {
        id: 99,
        category: "dna",
        subcategory: "measurement",
        question: "What studies have FDA performed or solicited from Pfizer or Moderna to characterize the differences between qPCR and UV or fluorescence methods of estimating the amount of residual DNA?",
        page: 31,
        section: "6.3"
    },
    {
        id: 100,
        category: "dna",
        subcategory: "measurement",
        question: "Please supply the test protocols for estimating DNA or RNA by qPCR, UV absorption or fluorescence methods, including details of sample preparation to ensure recovery from LNPs and the reduction of confounding of RNA measurements by DNA, or vice-versa.",
        page: 31,
        section: "6.3"
    },
    {
        id: 101,
        category: "dna",
        subcategory: "measurement",
        question: "Please confirm that residual DNA is measured at the end of the IVT process, and not in the final drug product. Please justify why it should is not also measured in the final DP formulation, commenting on whether there is free DNA outside of the LNP.",
        page: 31,
        section: "6.3"
    },
    {
        id: 102,
        category: "dna",
        subcategory: "fragment size",
        question: "Are residual DNA fragment size or size distribution critical quality attributes for modRNA DS or DP? What methods are used to determine fragment size and distribution?",
        page: 32,
        section: "6.4"
    },
    {
        id: 103,
        category: "dna",
        subcategory: "fragment size",
        question: "Are residual DNA fragment size or size distribution critical quality attributes included in release specifications?",
        page: 32,
        section: "6.4"
    },
    {
        id: 104,
        category: "dna",
        subcategory: "fragment size",
        question: "Are residual DNA fragment size or size distribution determined as part of the lot release requirements?",
        page: 32,
        section: "6.4"
    },
    {
        id: 105,
        category: "dna",
        subcategory: "fragment size",
        question: "According to a FOIA disclosure from Health Canada p24/584 in (118), Pfizer claimed they had never been asked by any regulator to conduct a DNA fragment size distribution analysis. Please confirm. If true, please justify.",
        page: 32,
        section: "6.4"
    },
    {
        id: 106,
        category: "dna",
        subcategory: "fragment size",
        question: "Did Pfizer provide a DNA fragment size distribution analysis? Please provide. Otherwise please explain why they were not asked to do so.",
        page: 33,
        section: "6.4"
    },
    {
        id: 107,
        category: "dna",
        subcategory: "fragment size",
        question: "Did Moderna provide a DNA fragment size distribution analysis? Please provide. Otherwise please explain why they were not asked to do so.",
        page: 33,
        section: "6.4"
    },
    {
        id: 108,
        category: "dna",
        subcategory: "fragment size",
        question: "What studies has FDA conducted or solicited from Pfizer or Moderna to describe the fragment size distribution of residual DNA in modRNA vaccines? Please provide methodological details.",
        page: 33,
        section: "6.4"
    },
    {
        id: 109,
        category: "dna",
        subcategory: "quality control",
        question: "What percentage of lots of COVID-19 modRNA vaccines failed release testing either by manufacturers or FDA because fragment size criteria were out of specification?",
        page: 33,
        section: "6.4"
    },
    {
        id: 110,
        category: "dna",
        subcategory: "fragment size",
        question: "If fragment size data were not part of release criteria, but nonetheless measured, what percentage of released lots of COVID-19 modRNA vaccine contained fragments larger than 200 bp? Please stratify by manufacturer, presentation (adult vs. children's dose etc.), and variant type (original, bivalent, XBB.1.5).",
        page: 33,
        section: "6.4"
    },
    {
        id: 111,
        category: "dna",
        subcategory: "limits",
        question: "Given the finding that released lots did contain fragments of residual DNA greater than 200 bp and given the above statement in the cited WHO 2007 (115) document, what adjustments to the 10 ng dose limit are required to preserve the same safety margin?",
        page: 33,
        section: "6.4"
    },
    {
        id: 112,
        category: "dna",
        subcategory: "plasmid elements",
        question: "What studies has FDA conducted or solicited from Pfizer or Moderna to determine the prevalence of intact sequence elements from the plasmid vectors in the pool of residual DNA found in COVID-19 modRNA vaccines?",
        page: 33,
        section: "6.4"
    },
    {
        id: 113,
        category: "dna",
        subcategory: "sequence changes",
        question: "Please summarize and tabulate all changes to the sequences of the DNA plasmid vector and the modRNA DS used in the preclinical tests, clinical studies, and post-authorization to the current versions of COVID-19 vaccines. Please indicate the reason for each change and what analytical, non-clinical or clinical comparability studies were performed to qualify these changes.",
        page: 35,
        section: "6.4"
    },
    {
        id: 114,
        category: "dna",
        subcategory: "sequence changes",
        question: "Per Question 113, if no preclinical or clinical studies were performed for any given change, please provide a rationale.",
        page: 35,
        section: "6.4"
    },
    {
        id: 115,
        category: "dna",
        subcategory: "antibiotic resistance",
        question: "What risk-assessment or studies have FDA conducted or solicited from Pfizer or Moderna related to the transfection of an antibiotic resistance gene within residual DNA into a vaccinee?",
        page: 35,
        section: "7.1"
    },
    {
        id: 116,
        category: "dna",
        subcategory: "antibiotic resistance",
        question: "What risk-assessment or other studies have FDA conducted or solicited from Pfizer or Moderna related to the transfection of antibiotic resistance genes into commensal or infection pools of bacteria in a vaccinee?",
        page: 35,
        section: "7.1"
    },
    {
        id: 117,
        category: "dna",
        subcategory: "antibiotic resistance",
        question: "What risk-assessment or studies have FDA conducted or solicited from Pfizer or Moderna related to the transfection of antibiotic resistance genes into commensal or infection pools of bacteria in a vaccinee?",
        page: 35,
        section: "7.1"
    },
    {
        id: 118,
        category: "dna",
        subcategory: "antibiotic resistance",
        question: "What risk-assessment or studies have FDA conducted or solicited from Pfizer or Moderna related to the transfection of antibiotic resistance genes into environmental (e.g. soil, wastewater) bacteria?",
        page: 35,
        section: "7.1"
    },
    {
        id: 119,
        category: "dna",
        subcategory: "studies",
        question: "Please provide details of the \"in-house mRNA\" used by Wang et al., (11) particularly its source and similarity to EUA of BLA material. Please provide all raw data for this study, and describe the involvement of FDA staff and their relationship to the student. Please provide the protocols or other documentation likely needed for submission to the R&D committees that would have been needed to approve the conduct of the study.",
        page: 35,
        section: "7.1"
    },
    {
        id: 120,
        category: "dna",
        subcategory: "sv40",
        question: "Please confirm that the plasmid template used to produce all Pfizer-BioNTech COVID-19 vaccines made under EUA or BLA, to date (including the XBB.1.15 vaccine) contain sequences for 1) SV40-promoter-enhancer-ori, 2) SV40 poly(A) signal; 3) HSV poly(A) signal.",
        page: 38,
        section: "7.2"
    },
    {
        id: 121,
        category: "regulatory",
        subcategory: "disclosure",
        question: "Please describe FDA's expectation, by statute, regulation, or practice for sponsors to disclosure all sequence elements contained in the plasmid template used for the production of modRNA or mRNA vaccines.",
        page: 38,
        section: "7.2"
    },
    {
        id: 122,
        category: "dna",
        subcategory: "sv40",
        question: "Please describe whether Pfizer disclosed the full plasmid sequence of its plasmid to FDA and whether this disclosure included specific details of sequence elements, including the three sequences listed above apparently not disclosed to EMA or Health Canada. Please describe whether these disclosures included an annotated plasmid map. Please answer this question for all variant (Wuhan, bivalent, XBB1.5) vaccine versions, whether under EUA or BLA. Please provide the dates of disclosure of the full sequence and the details of any sequence elements not disclosed along with the full sequence.",
        page: 38,
        section: "7.2"
    },
    {
        id: 123,
        category: "regulatory",
        subcategory: "disclosure",
        question: "If these three sequence elements were not detailed at the same time as the full sequence, please provide Pfizer's justification for not doing so.",
        page: 38,
        section: "7.2"
    },
    {
        id: 124,
        category: "dna",
        subcategory: "sv40",
        question: "Please provide the date when FDA asked Pfizer whether or these sequences were present in their plasmid.",
        page: 38,
        section: "7.2"
    },
    {
        id: 125,
        category: "dna",
        subcategory: "sv40",
        question: "Please describe whether and when Pfizer disclosed to FDA the function of these three sequences.",
        page: 38,
        section: "7.2"
    },
    {
        id: 126,
        category: "dna",
        subcategory: "sv40",
        question: "Please state when FDA asked Pfizer to describe the function of these sequences. Please describe the function of these three sequences.",
        page: 38,
        section: "7.2"
    },
    {
        id: 127,
        category: "dna",
        subcategory: "sv40",
        question: "Please state whether Pfizer or FDA provided or performed a risk assessment related to the presence of these sequences, as intact sequences in residual DNA in Drug Product? If one has been submitted or prepared, please provide a copy.",
        page: 38,
        section: "7.2"
    },
    {
        id: 128,
        category: "dna",
        subcategory: "sv40",
        question: "Per Question 127, does this assessment consider the actions of the SV40 enhancer-promoter-ori described in section 7.2.2? If not, please discuss these topics.",
        page: 38,
        section: "7.2"
    },
    {
        id: 129,
        category: "dna",
        subcategory: "sv40",
        question: "Please state when FDA asked Pfizer to provide a risk assessment related to these sequences.",
        page: 38,
        section: "7.2"
    },
    {
        id: 130,
        category: "dna",
        subcategory: "sv40",
        question: "If, according to the FDA 2010 guidance (63) the risks of DNA can be lessened by reducing the amount of residual DNA, please provide a justification for increasing the load of DNA by the inclusion of SV40 sequences that are, according to EMA, (116) \"non-functional.\"",
        page: 38,
        section: "7.2"
    },
    {
        id: 131,
        category: "regulatory",
        subcategory: "enforcement",
        question: "If, per the above questions, Pfizer failed to make the appropriate disclosures regarding the presence, function or assessment of risk of these sequences in a timely fashion, what regulatory actions were and will be taken against Pfizer? What was Pfizer's justification for failing to make these disclosures?",
        page: 39,
        section: "7.2"
    },
    {
        id: 132,
        category: "regulatory",
        subcategory: "compliance",
        question: "If the SV40 sequences are indeed non-functional,\" and their inclusion not unavoidable, it would appear that intact or fragmented SV40 or HSV sequences found in residual DNA constitute \"extraneous material.\" What investigative or enforcement actions has FDA taken to correct this apparent violation of the regulations that \"\"Products shall be free of extraneous material.\"",
        page: 39,
        section: "7.2"
    },
    {
        id: 133,
        category: "dna",
        subcategory: "sv40",
        question: "Did FDA receive a document similar to that provided to Health Canada? (126) When? Please supply unredacted text.",
        page: 39,
        section: "7.2"
    },
    {
        id: 134,
        category: "dna",
        subcategory: "sv40",
        question: "What evidence did Pfizer present to justify the statement: \"residual DNA is expected to degrade rapidly \" Did FDA ask Pfizer to provide this evidence? Please provide.",
        page: 39,
        section: "7.2"
    },
    {
        id: 135,
        category: "dna",
        subcategory: "sv40",
        question: "What evidence did Pfizer present to justify the statement: \"residual DNA […] has a very low likelihood of reaching the nucleus. \" Did FDA ask Pfizer to provide this evidence? Please provide.",
        page: 39,
        section: "7.2"
    },
    {
        id: 136,
        category: "dna",
        subcategory: "sv40",
        question: "Did Pfizer quantify, with justification, just how likely or unlikely the sequences described could reach the nucleus? Did FDA ask Pfizer to provide this evidence? Please provide.",
        page: 39,
        section: "7.2"
    },
    {
        id: 137,
        category: "dna",
        subcategory: "sv40",
        question: "Given the absence of a nuclear member in mitosis (4.2), and the ability of the SV40 sequence to act as a nuclear localization signal, (69,127) did FDA challenge Pfizer on the assertion that \"residual DNA […] has a very low likelihood of reaching the nucleus.\" Please provide.",
        page: 39,
        section: "7.2"
    },
    {
        id: 138,
        category: "dna",
        subcategory: "sv40",
        question: "Did Pfizer quantify, the likelihood of expression of the resistance gene, as well as the duration of its \"transience.\" Did Pfizer describe what biological this gene would have if expressed and explain why this would not pose a safety risk? Did FDA seek answers to these questions?",
        page: 39,
        section: "7.2"
    },
    {
        id: 139,
        category: "dna",
        subcategory: "sv40",
        question: "Has FDA asked Pfizer to remove the SV40 sequences from their plasmids? What is the schedule for this? Ny what regulatory pathway will these non-SV40 versions of Pfizer's pro-vaccines be approved? Will RCT's be required?",
        page: 39,
        section: "7.2"
    },
    {
        id: 140,
        category: "dna",
        subcategory: "unintended sequences",
        question: "What investigations were performed by Pfizer, Moderna, FDA, or other government to determine the presence of \"unexpected open reading frames\" or \"unintended sequences of biological significance\" in both strands of the plasmid vector used to produce the modRNA COVID-19 vaccines?",
        page: 40,
        section: "7.3"
    },
    {
        id: 141,
        category: "dna",
        subcategory: "unintended sequences",
        question: "Please provide the study reports of any investigations performed per Question 140, along with risk assessments related to the findings.",
        page: 40,
        section: "7.3"
    },
    {
        id: 142,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "When did FDA become aware that lipids may form adducts with nucleic acids?",
        page: 41,
        section: "8.1"
    },
    {
        id: 143,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "What is the nature of the lipid-RNA species and why might they be a concern?",
        page: 41,
        section: "8.1"
    },
    {
        id: 144,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "Did FDA have a similar concern for lipid-RNA species as did EMA? Were these concerns based on formation of aldehyde-related adducts, or other mechanisms?",
        page: 41,
        section: "8.1"
    },
    {
        id: 145,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "How was this concern lipid-RNA species resolved?",
        page: 41,
        section: "8.1"
    },
    {
        id: 146,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "Given that the work on the lipid-RNA species was to be provided by January 1 2021, when exactly did this occur?",
        page: 41,
        section: "8.1"
    },
    {
        id: 147,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "If lipid-RNA species prior to resolution of this issue, how many doses of mRNA-1273 had been administered either in clinical trials or post approval/ authorization?",
        page: 41,
        section: "8.1"
    },
    {
        id: 148,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "Are there specific guidelines and limits on these adducts? How are they controlled? Did Pfizer and Moderna comply with these guidelines?",
        page: 41,
        section: "8.1"
    },
    {
        id: 149,
        category: "manufacturing",
        subcategory: "buffer",
        question: "Given what was known at the time about lipid adducts and their possible biological consequences, what studies analytical, preclinical or clinical studies did FDA require from Pfizer when they changed their buffer? What were the results or requested or voluntarily provided studies?",
        page: 42,
        section: "8.2"
    },
    {
        id: 150,
        category: "regulatory",
        subcategory: "disclosure",
        question: "Why were the possible biological consequences of a buffer change fully disclosed to VRBPAC who were being asked to make recommendations based on the totality of scientific evidence available and a consideration of known and potential risks?",
        page: 42,
        section: "8.2"
    },
    {
        id: 151,
        category: "manufacturing",
        subcategory: "bivalent",
        question: "By way of tabulation, please compare and contrast, the processes used to produce the original monovalent version of the COVID-19 modRNA provaccines, and the bivalent. Please provide separate comparisons or Moderna and Pfizer.",
        page: 43,
        section: "9"
    },
    {
        id: 152,
        category: "manufacturing",
        subcategory: "bivalent",
        question: "Please provide the questions asked by FDA and the justifications provided by Moderna and Pfizer to support the claim of manufacturing comparability.",
        page: 43,
        section: "9"
    },
    {
        id: 153,
        category: "safety",
        subcategory: "bivalent",
        question: "Were Moderna and Pfizer asked to provide an assessment of toxicological equivalency of the heterotrimer spike proteins to their homotrimer counterparts? Please provide.",
        page: 43,
        section: "9"
    },
    {
        id: 154,
        category: "safety",
        subcategory: "bivalent",
        question: "Were Moderna and Pfizer asked to conduct in vitro, animal or clinical comparability testing, particularly to demonstrate toxicological equivalency of the heterotrimer spike proteins to their homotrimer counterparts? Please provide.",
        page: 44,
        section: "9"
    },
    {
        id: 155,
        category: "genotoxicity",
        subcategory: "historical",
        question: "Which peer reviewed paper(s) or regulatory document(s), including submissions from Pfizer or Moderna describe the details of \"animal studies with the mRNA delivery technology done over the past decade\" that \"show no evidence of genotoxicity.\" Please provide.",
        page: 44,
        section: "10"
    },
    {
        id: 156,
        category: "biodistribution",
        subcategory: "lnp",
        question: "Given that, according to a paper co-authored by a founder of Moderna, (67) LNP particle size is a major determinant of distribution, and also according to FDA, \"because biodistribution and retention is a property of the LNP rather than the mRNA,\" how does this the study support \"the approval of SPIKEVAX BLA\"?",
        page: 50,
        section: "10.1"
    },
    {
        id: 157,
        category: "biodistribution",
        subcategory: "lnp",
        question: "Following from Question 156, Given that, according to a paper co-authored by a founder of Moderna, (67) LNP particle size is a major determinant of distribution, and also according to FDA, \"because biodistribution and retention is a property of the LNP rather than the mRNA,\" how does this the study support the authorization of Pfizer product
        page: 50,
        section: "10.1"
    },
    {
        id: 158,
        category: "biodistribution",
        subcategory: "formulation",
        question: "Given that the composition of mRNA 1647 is critical to understand the relevance of any studies that are used to support the authorization or approval of mRNA 1273, please provide the full formulation details of mRNA 1647, such as those redacted from the distribution study report. (131)",
        page: 50,
        section: "10.1"
    },
    {
        id: 159,
        category: "biodistribution",
        subcategory: "formulation",
        question: "Per Question 158, did the formulation of mRNA 1647 used in Moderna's distribution study contain Tris?",
        page: 50,
        section: "10.1"
    },
    {
        id: 160,
        category: "manufacturing",
        subcategory: "lipid adducts",
        question: "Given the manufacturing controls alluded to by Moderna (129) to reduce lipid adduct formation, when, relative to the conduct of the Moderna's distribution study, were these controls implemented?",
        page: 50,
        section: "10.1"
    },
    {
        id: 161,
        category: "biodistribution",
        subcategory: "manufacturing",
        question: "Please confirm the accuracy of FDA's document (151) in stating the that the product used in Moderna's distribution study was \"manufactured using the same procedure as SPIKEVAX\"?",
        page: 50,
        section: "10.1"
    },
    {
        id: 162,
        category: "safety",
        subcategory: "animal models",
        question: "What consideration has FDA made concerning the selection of suitable animal models for pharmacology, biodistribution and other safety studies for modRNA products encoding antigens whose interaction with host ligands may be species specific?",
        page: 51,
        section: "10.1"
    },
    {
        id: 163,
        category: "biodistribution",
        subcategory: "degradation",
        question: "What data or literature were provided by Pfizer to support their expectations (160) regarding the degradation or mRNA or spike protein?",
        page: 53,
        section: "11.2"
    },
    {
        id: 164,
        category: "regulatory",
        subcategory: "guidelines",
        question: "Given emerging data suggesting vaccinal modRNA persistence for significantly longer (72,73,75,78) than the \"short time\" described in the WHO guideline on mRNA vaccines,(71) and given FDA's participation in the drafting of that document, what revisions has FDA proposed or will propose to that document?",
        page: 53,
        section: "11.2"
    },
    {
        id: 165,
        category: "regulatory",
        subcategory: "messaging",
        question: "Since the introduction of the modRNA COVID-19 vaccines, to what extent did FDA agree with CDC messaging suggesting that the modRNA is eliminated \"within a few days\" and the spike protein \"within a few weeks\" (see 11.1)?",
        page: 53,
        section: "11.2"
    },
    {
        id: 166,
        category: "regulatory",
        subcategory: "messaging",
        question: "Given emerging data suggesting vaccinal modRNA persistence for significantly longer (72,73,75,78) than the \"few days\" and spike protein persistence for significantly longer than \"a few weeks\" (74,75,78,163) (see 11.1) what revisions has FDA proposed or will propose to CDC or other government entities to correct the earlier statements?",
        page: 53,
        section: "11.2"
    },
    {
        id: 167,
        category: "regulatory",
        subcategory: "messaging",
        question: "Since the introduction of the modRNA COVID-19 vaccines and given data generated by Pfizer and Moderna in animals showing a wide distribution of LNPs and/or modRNA, to what extent did FDA agree with CDC messaging suggesting that the modRNA vaccines stay at the site of injection, where they act (see 11.1)?",
        page: 54,
        section: "11.2"
    },
    {
        id: 168,
        category: "regulatory",
        subcategory: "messaging",
        question: "To what extent does FDA now agree with CDC messaging suggesting that the modRNA vaccines stay at the site of injection, where they act (see 11.1)?",
        page: 54,
        section: "11.2"
    },
    {
        id: 169,
        category: "regulatory",
        subcategory: "guidelines",
        question: "Given Pfizer's and Moderna's data from animals showing a wide distribution of LNPs and/or modRNA and given FDA's participation in the drafting of WHO guidelines (48,172) suggesting a much narrower distribution, what revisions has FDA proposed or will propose to those document regarding vaccines if any kind that use LNP-technology?",
        page: 54,
        section: "11.2"
    },
    {
        id: 170,
        category: "biodistribution",
        subcategory: "lnp",
        question: "What data has FDA relied upon to validate the assertion that \"biodistribution and retention are properties of the LNP rather than the mRNA\"?",
        page: 55,
        section: "11.2"
    },
    {
        id: 171,
        category: "biodistribution",
        subcategory: "spike protein",
        question: "Why has the FDA not required data on the biodistribution of the spike protein? That is, have cells been transfected and have subsequently produced the desired protein?",
        page: 55,
        section: "11.2"
    },
    {
        id: 172,
        category: "biodistribution",
        subcategory: "guidelines",
        question: "Given the novel mechanism of action, delivery and distribution of modRNA vaccines is not contemplated by WHO guidelines (172,177), please provide a rationale for why they can be used to justify the non-conduct of RNA or protein metabolism or excretion studies on the candidate vaccine formulations?",
        page: 56,
        section: "11.3"
    },
    {
        id: 173,
        category: "biodistribution",
        subcategory: "comparability",
        question: "What studies were conducted to establish that the biodistribution of modRNA incorporated into formulations used in the mRNA 1647 and mRNA 1273 test articles in Moderna's toxicology and biodistribution studies, is equivalent?",
        page: 57,
        section: "11.4"
    },
    {
        id: 174,
        category: "biodistribution",
        subcategory: "lipid adducts",
        question: "How does the distribution and gene expression of mRNA as lipid-adduct compare with that of non-adducted mRNA?",
        page: 57,
        section: "11.4"
    },
    {
        id: 175,
        category: "biodistribution",
        subcategory: "assays",
        question: "Is mRNA as lipid-adduct detected in the multiplex branched DNA (bDNA) assay used to determine levels of mRNA in tissues in Moderna's biodistribution study?",
        page: 57,
        section: "11.4"
    },
    {
        id: 176,
        category: "biodistribution",
        subcategory: "lipid adducts",
        question: "Does the presence of mRNA as lipid-adduct confound in any way the results and interpretation of Moderna's biodistribution study and its gene expression?",
        page: 57,
        section: "11.4"
    },
    {
        id: 177,
        category: "biodistribution",
        subcategory: "comparability",
        question: "Given that the formulation of the mRNA 1647 used in Moderna's toxicology and biodistribution studies appear to differ substantially from mRNA 1273 in ways that likely materially affect LNP physicochemical, distribution and transfection properties, how do studies involving mRNA 1647 support \"the approval of SPIKEVAX BLA\"?",
        page: 57,
        section: "11.4"
    },
    {
        id: 178,
        category: "biodistribution",
        subcategory: "kinetics",
        question: "Per Question 170, and in view of the findings in Moderna's own PK study suggesting construct-dependent kinetics, controverting FDA's premise of almost exclusively LNP-dependent kinetics, what studies will FDA soliciting to better characterize the PK of the Moderna COVID-19 mRNA vaccine?",
        page: 60,
        section: "11.4"
    },
    {
        id: 179,
        category: "regulatory",
        subcategory: "guidance",
        question: "In view of the findings in Moderna's own PK study suggesting construct-dependent kinetics, controverting FDA's premise of almost exclusively LNP-dependent kinetics, what guidance will FDA issue regarding the sorts of PK studies needed to support mRNA product approval?",
        page: 60,
        section: "11.4"
    },
    {
        id: 180,
        category: "safety",
        subcategory: "toxicology",
        question: "In view of the findings in Moderna's own PK study suggesting construct-dependent kinetics, controverting FDA's premise of almost exclusively LNP-dependent kinetics, what assurance can FDA give about the safety of a product whose approval has relied exclusively on toxicology studies conducted with non-candidate constructs?",
        page: 60,
        section: "11.4"
    },
    {
        id: 181,
        category: "biodistribution",
        subcategory: "spike protein",
        question: "What in vivo studies did Pfizer or Moderna provide to describe the distribution and kinetics of spike protein production after dosing with COVID-19 modRNA vaccines?",
        page: 61,
        section: "11.6"
    },
    {
        id: 182,
        category: "biodistribution",
        subcategory: "studies",
        question: "Given reports of vaccinal modRNA or spike protein persistence far longer than indicated by Pfizer's limited PK data or public health messaging, what animal or human studies have FDA requested of Pfizer and Moderna to better understand the PK of COVID-19 modRNA vaccines and to better inform a risk benefit analysis? Do these include studies using commercially available product?",
        page: 61,
        section: "11.6"
    },
    {
        id: 183,
        category: "regulatory",
        subcategory: "guidance",
        question: "Given reports of vaccinal modRNA or spike protein persistence far longer than indicated by Pfizer's limited PK data or public health messaging, what guidance will FDA provide regarding the types of animal and human PK, distribution and expression kinetics studies should be performed for modRNA vaccines or other modRNA gene therapies?",
        page: 61,
        section: "11.6"
    },
    {
        id: 184,
        category: "genotoxicity",
        subcategory: "expectations",
        question: "On what basis did Pfizer \"expected\" that the components of the vaccine construct are lipids and RNA would not have genotoxic potential? Did FDA challenge this expectation?",
        page: 63,
        section: "12.2"
    },
    {
        id: 185,
        category: "regulatory",
        subcategory: "accuracy",
        question: "Will FDA correct Dr. Marks' statement that \"Additionally, studies have been conducted in animals using the modified mRNA and lipid nanoparticle together that constitute the vaccine, including the minute quantities of residual DNA fragments left over after DNAse treatment during manufacturing, and demonstrate no evidence for genotoxicity from the vaccine\"?",
        page: 64,
        section: "12.2"
    },
    {
        id: 186,
        category: "regulatory",
        subcategory: "standards",
        question: "What was the regulatory basis for FDA's heavy reliance on nonclinical studies involving early modRNA COVID-19 vaccine prototypes, or non-COVID-19 modRNA prototypes, rather than on studies involving test articles of substantially identical composition to the authorized product? To what extent was reliance based on the EUA \"totality-of-evidence\" standard?",
        page: 64,
        section: "12.3"
    },
    {
        id: 187,
        category: "regulatory",
        subcategory: "standards",
        question: "How is FDA's heavy reliance on nonclinical studies involving early modRNA COVID-19 vaccine prototypes, or non-COVID-19 modRNA prototypes, rather than on studies involving test articles of substantially identical composition to the authorized product, compatible with BLA requirements?",
        page: 64,
        section: "12.3"
    },
    {
        id: 188,
        category: "safety",
        subcategory: "studies",
        question: "Which nonclinical studies have FDA requested from Pfizer of Moderna to rectify the quality and quantity of the limited studies relied upon under EUA conditions, but would have been insufficient in non-pandemic conditions?",
        page: 64,
        section: "12.3"
    },
    {
        id: 189,
        category: "genotoxicity",
        subcategory: "excipients",
        question: "While the dose of ALC-0159 appears to be low compared with the doses associated with genotoxicity (according to the EMA report), what consideration was given to a possible synergistic effect of sub-genotoxic threshold levels of this component with other vaccine components?",
        page: 65,
        section: "12.3"
    },
    {
        id: 190,
        category: "genotoxicity",
        subcategory: "studies",
        question: "Please confirm the identity of mystery mRNA. To the extent that redaction ever qualified for a (b)(4) exemption, the matter has already been publicly disclosed in the EMA and Moderna documents.",
        page: 66,
        section: "12.3"
    },
    {
        id: 191,
        category: "genotoxicity",
        subcategory: "disclosure",
        question: "Please explain the reason why the genotoxicity study with the \"other\" mRNA was not described FDA's document. (151) FDA's omission does not appear to be a failure by Moderna to report the study to FDA. (152)",
        page: 66,
        section: "12.3"
    },
    {
        id: 192,
        category: "genotoxicity",
        subcategory: "data",
        question: "Please provide the study reports for the rat micronucleus assays conducted on the Zika (Study 9800399) and luciferase (Study AF87FU.125012 NGLPICH.BTL) test articles.",
        page: 67,
        section: "12.3"
    },
    {
        id: 193,
        category: "genotoxicity",
        subcategory: "mechanisms",
        question: "Please discuss how reductions in reticulocytes and polychromatic cells seen in toxicology and genotoxicity studies are mechanistically related to an increase in micronucleated cells seen in the Zika mRNA genotoxicity study.",
        page: 67,
        section: "12.3"
    },
    {
        id: 194,
        category: "safety",
        subcategory: "toxicity",
        question: "Do reductions in reticulocytes and polychromatic cells, as well as disturbances in erythropoiesis raise any concerns for bone marrow toxicity? What follow up studies or risk analysis has FDA requested on this topic?",
        page: 67,
        section: "12.3"
    },
    {
        id: 195,
        category: "genotoxicity",
        subcategory: "formulation",
        question: "Given the disclosure (11.4.1) that the sizes of LNPs in a CMV vaccine examined in a biodistribution study were smaller than those found in mRNA-1273, despite misleading statements suggesting that they were the same, what assurances can FDA give that the formulations of the Zika and luciferase mRNA vaccines subjected to genotoxicity tests were identical to mRNA-1273, other than in the modRNA sequence coding for the target antigen/ luciferase?",
        page: 67,
        section: "12.3"
    },
    {
        id: 196,
        category: "genotoxicity",
        subcategory: "documentation",
        question: "Will FDA resolve the discrepancies between the FDA, EMA and Moderna documents regarding which LNP components were tested in these genotoxicity tests.",
        page: 67,
        section: "12.3"
    },
    {
        id: 197,
        category: "genotoxicity",
        subcategory: "impurities",
        question: "What was the nature of the concern for mutagenic impurities in PEG2000-DMG?",
        page: 67,
        section: "12.3"
    },
    {
        id: 198,
        category: "genotoxicity",
        subcategory: "impurities",
        question: "Did FDA have a similar concern for mutagenic impurities in PEG2000-DMG as did EMA?",
        page: 68,
        section: "12.3"
    },
    {
        id: 199,
        category: "genotoxicity",
        subcategory: "impurities",
        question: "How was this concern for mutagenic impurities in PEG2000-DMG resolved?",
        page: 68,
        section: "12.3"
    },
    {
        id: 200,
        category: "genotoxicity",
        subcategory: "timeline",
        question: "Given that the evaluation of the potential presence of mutagenic impurities in PEG2000-DMG was to be provided post-approval, when exactly did this occur?",
        page: 68,
        section: "12.3"
    },
    {
        id: 201,
        category: "safety",
        subcategory: "exposure",
        question: "If mutagenic impurities did exist in PEG2000-DMG prior to resolution of this issue, how many doses of mRNA-1273 (and to how many people) had been administered either in clinical trials or post approval/ authorization?",
        page: 68,
        section: "12.3"
    },
    {
        id: 202,
        category: "genotoxicity",
        subcategory: "risk assessment",
        question: "Has any risk assessment been conducted or requested by FDA to assess whether synergistic effects occurred between any subthreshold mutagenicity of impurities in PEG2000-DMG and any effects from other vaccine components or impurities?",
        page: 68,
        section: "12.3"
    },
    {
        id: 203,
        category: "genotoxicity",
        subcategory: "impurities",
        question: "What was the nature of the concern for benzene or mutagenic impurities in SM-102?",
        page: 68,
        section: "12.3"
    },
    {
        id: 204,
        category: "genotoxicity",
        subcategory: "impurities",
        question: "Did FDA have a similar concern for benzene or mutagenic impurities in SM-102 as did EMA?",
        page: 68,
        section: "12.3"
    },
    {
        id: 205,
        category: "genotoxicity",
        subcategory: "impurities",
        question: "How was this concern for benzene or mutagenic impurities in SM-102 resolved?",
        page: 68,
        section: "12.3"
    },
    {
        id: 206,
        category: "genotoxicity",
        subcategory: "timeline",
        question: "Given that the risk assessment for the presence of benzene in SM-102 was to be provided by June 30 2021, when exactly did this occur?",
        page: 68,
        section: "12.3"
    },
    {
        id: 207,
        category: "safety",
        subcategory: "exposure",
        question: "If benzene or mutagenic impurities did exist in SM-102 prior to resolution of this issue, how many doses (and to how many people) of mRNA-1273 had been administered either in clinical trials or post approval/ authorization?",
        page: 68,
        section: "12.3"
    },
    {
        id: 208,
        category: "genotoxicity",
        subcategory: "risk assessment",
        question: "Has any risk assessment been conducted or requested by FDA to assess whether synergistic effects occurred between any benzene and subthreshold mutagenicity of impurities in SM-102 and any effects from other vaccine components or impurities?",
        page: 68,
        section: "12.3"
    },
    {
        id: 209,
        category: "safety",
        subcategory: "data",
        question: "Will FDA release the full original reports for all Moderna and Pfizer toxicological studies supporting the various EUA or BLA's for their COVID-19 mRNA vaccines?",
        page: 68,
        section: "12.3"
    },
    {
        id: 210,
        category: "safety",
        subcategory: "formulation",
        question: "What is the identity of the ingredient \"PG\" used in some of Moderna's repeat-dose toxicology studies and in its biodistribution study? Is this polyethylene glycol (PEG)?",
        page: 68,
        section: "12.3"
    },
    {
        id: 211,
        category: "safety",
        subcategory: "formulation",
        question: "Given the disclosure (11.4.1) that the sizes of LNPs in a CMV vaccine examined in a biodistribution study were smaller than those found in mRNA-1273, despite misleading statements suggesting that they were the same, what assurances can FDA give that the formulations of the Zika and luciferase mRNA vaccines subjected to genotoxicity tests were identical to mRNA-1273, other than in the modRNA sequence coding for the target antigen/ luciferase?",
        page: 68,
        section: "12.3"
    },
    {
        id: 212,
        category: "safety",
        subcategory: "limitations",
        question: "Was FDA aware of the procedural/methodological limitations in Moderna's only repeat-dose toxicology study on its SARS-CovV-2 mRNA candidate described in the EMA document?",
        page: 69,
        section: "12.3"
    },
    {
        id: 213,
        category: "safety",
        subcategory: "limitations",
        question: "The procedural/methodological limitations indicated by EMA for Moderna's only repeat-dose toxicology study on its SARS-CovV-2 mRNA candidate appear to extend beyond non-compliance with GLP. What was the nature of these limitations?",
        page: 69,
        section: "12.3"
    },
    {
        id: 214,
        category: "regulatory",
        subcategory: "disclosure",
        question: "The absence in FDA's document of a qualifying statement similar to that in the EMA document appears to be a material omission possibly affecting the interpretation of the body of nonclinical data. Please justify or comment.",
        page: 69,
        section: "12.3"
    },
    {
        id: 215,
        category: "regulatory",
        subcategory: "standards",
        question: "What standard of evidence did FDA ascribe to the comparison of data from a procedurally, methodologically, and inadequate study of Moderna's SARS-Cov-2 vaccine candidate to data from studies on other mRNA products?",
        page: 69,
        section: "12.3"
    },
    {
        id: 216,
        category: "regulatory",
        subcategory: "standards",
        question: "Even if, per Question 215, the quality of data from the only repeat-dose toxicology study of Moderna's COVID-19 vaccine candidate was sufficient to meet the EUA \"totality of evidence\" standard, did FDA consider that this study met BLA requirements?",
        page: 69,
        section: "12.3"
    },
    {
        id: 217,
        category: "safety",
        subcategory: "findings",
        question: "Were these large unstained cells in Pfizer's repeat dose toxicity study reported to FDA? Did FDA seek clarification as to their nature? What was Pfizer's response?",
        page: 69,
        section: "12.3"
    },
    {
        id: 218,
        category: "safety",
        subcategory: "versions",
        question: "Referencing Question 61 (section 3.6), what other differences in the results from nonclinical studies were found between the V8 and V9 Pfizer product versions?",
        page: 69,
        section: "12.3"
    },
    {
        id: 219,
        category: "genotoxicity",
        subcategory: "guidelines",
        question: "Did FDA challenge Pfizer's assertion based on WHO 2005 guideline, that genotoxicity would not be needed?",
        page: 71,
        section: "12.4"
    },
    {
        id: 220,
        category: "regulatory",
        subcategory: "guidelines",
        question: "Will FDA work to remove ambiguities in their own guidelines related to the conduct of genotoxicity and carcinogenicity studies for modRNA pro-vaccines?",
        page: 71,
        section: "12.4"
    },
    {
        id: 221,
        category: "safety",
        subcategory: "cancer signals",
        question: "Although FDA did not identify any cancer signals using Empirical Bayesian Data Mining, (EBDM) their analysis was recently suggested to be seriously flawed. (204) Please provide full details of all signals generated by EBDM, including where the threshold is set to EB05>1, and the RGPS procedure within the Empirica software is used to adjust for masking, using the ER05>1 criteria?",
        page: 72,
        section: "13"
    },
    {
        id: 222,
        category: "frameshift",
        subcategory: "detection",
        question: "Did Pfizer or Moderna identify within their modRNA sequences any unexpected ORFs, including frameshift sequences per the WHO guidelines (71)? What were these sequences and when was this information provided?",
        page: 73,
        section: "14"
    },
    {
        id: 223,
        category: "frameshift",
        subcategory: "timeline",
        question: "Given the submission and publication of the Mulroney paper in January and December 2023 respectively, when did FDA first learn about the findings in this paper and from whom?",
        page: 74,
        section: "14"
    },
    {
        id: 224,
        category: "frameshift",
        subcategory: "design",
        question: "Given the production of neo-antigens or unwanted immune responses that \"may require a redesign of the mRNA sequence\" according to this WHO committee (214) and the description of the modRNA vaccines as \"error-prone\" in the Mulroney press release, (210) does FDA consider the non-selective N1-methylpseudouridylation of the Moderna and Pfizer COVID-19 vaccines to be an inherent design flaw?",
        page: 74,
        section: "14"
    },
    {
        id: 225,
        category: "frameshift",
        subcategory: "redesign",
        question: "What discussions have taken place between Pfizer or Moderna and FDA or other government agencies or entities regarding the need to redesign the COVID-19 vaccines as well as other vaccines employing the same technology?",
        page: 74,
        section: "14"
    },
    {
        id: 226,
        category: "frameshift",
        subcategory: "regulatory",
        question: "What will be the regulatory pathway for the introduction of redesigned modRNA-based vaccines?",
        page: 74,
        section: "14"
    },
    {
        id: 227,
        category: "frameshift",
        subcategory: "characterization",
        question: "Is FDA attempting to characterize the frameshift proteins in terms of their primary, secondary and tertiary structures, their glycosylation patterns, the sites and kinetics of their production, their pharmaco- and toxico-kinetics?",
        page: 74,
        section: "14"
    },
    {
        id: 228,
        category: "frameshift",
        subcategory: "studies",
        question: "What efforts have been made or are are underway to study the identity, pharmacology and toxicology of these frameshift proteins?",
        page: 74,
        section: "14"
    },
    {
        id: 229,
        category: "frameshift",
        subcategory: "screening",
        question: "What studies have been conducted and which in silico tools been utilized to screen for likely interactions of these frameshift proteins in the body?",
        page: 74,
        section: "14"
    },
    {
        id: 230,
        category: "frameshift",
        subcategory: "human studies",
        question: "In addition to in vitro and animal models, are these studies being conducted in humans? How do the actions of the frameshift proteins vary by age, gender, genetic make-up and comorbidity?",
        page: 74,
        section: "14"
    },
    {
        id: 231,
        category: "frameshift",
        subcategory: "interactions",
        question: "Given their possible chimeric nature, what efforts are underway to determine whether there are synergistic pharmacologic, immunologic or toxicologic effects between the frameshift proteins and the intended in-frame spike proteins?",
        page: 74,
        section: "14"
    },
    {
        id: 232,
        category: "frameshift",
        subcategory: "homology",
        question: "Have genomic and proteomic databases and tools such as BLAST been interrogated to determine if there are any homologies between the proposed frameshift proteins and peptides and known proteins?",
        page: 74,
        section: "14"
    },
    {
        id: 233,
        category: "frameshift",
        subcategory: "adverse events",
        question: "What efforts are underway to determine if there are associations between the formation and type of frameshift proteins and adverse events that have been already been experienced or reported?",
        page: 74,
        section: "14"
    },
    {
        id: 234,
        category: "frameshift",
        subcategory: "long-term",
        question: "What efforts are underway to determine if there are likely to be long-term consequences of these frameshift proteins?",
        page: 74,
        section: "14"
    },
    {
        id: 235,
        category: "frameshift",
        subcategory: "monitoring",
        question: "What efforts are underway to monitor for the occurrence of long-term consequences of these frameshift proteins?",
        page: 74,
        section: "14"
    },
    {
        id: 236,
        category: "frameshift",
        subcategory: "diagnosis",
        question: "What efforts are underway to determine methods for the diagnosis of possible harms caused by frameshift-proteins and treatments to limit, prevent or treat harm?",
        page: 75,
        section: "14"
    },
    {
        id: 237,
        category: "safety",
        subcategory: "autoimmune",
        question: "Did FDA express the same concern as EMA regarding vaccine-elicited autoimmune responses? Did Pfizer or Moderna submit a discussion on this topic to FDA, per the invitation extended to Pfizer in the EMA document? When? Please supply a copy.",
        page: 75,
        section: "14"
    },
    {
        id: 238,
        category: "frameshift",
        subcategory: "risk assessment",
        question: "In view of the evidence for off-target immune responses elicited by frameshift proteins described by Mulroney et al., as well as the concerns expressed in WHO and EMA documents, have Pfizer or Moderna been asked to submit, or have Pfizer or Moderna already submitted any risk assessments related to the production of frameshift proteins? When? Please supply a copy.",
        page: 75,
        section: "14"
    },
    {
        id: 239,
        category: "frameshift",
        subcategory: "immune response",
        question: "Is FDA aware of, or has it solicited or received from Pfizer, Moderna or other research entity, a full characterization of the off-target immune response elicited by frameshift proteins, alone or in combination with on-target proteins? In addition to characterization of the cellular response, as was partly provided in the Mulroney paper, does this work also include a characterization of the humoral response, which was not described by Mulroney et al.",
        page: 75,
        section: "14"
    },
    {
        id: 240,
        category: "regulatory",
        subcategory: "labeling",
        question: "What actions will FDA be taking to correct these potentially misleading statements by including appropriate labelling language describing the production of uncharacterized off-target frameshift proteins with unknown toxicology capable of eliciting uncharacterized off-target immune response of yet unknown clinical significance?",
        page: 75,
        section: "14"
    },
    {
        id: 241,
        category: "regulatory",
        subcategory: "communication",
        question: "What other steps will FDA take to inform the medical community and the lay public of he potential risks associated with the production of frameshift proteins?",
        page: 76,
        section: "14"
    },
    {
        id: 242,
        category: "regulatory",
        subcategory: "root cause",
        question: "What analysis has FDA conducted, or will conduct to investigate the root causes and systems failures for their apparent failure and/or that of the manufacturers to identify, detect, report, and investigate the formation of frameshift proteins and their potential risks?",
        page: 76,
        section: "14"
    },
    {
        id: 243,
        category: "regulatory",
        subcategory: "corrective actions",
        question: "If appropriate, what corrective actions has or will FDA implement within its own organization to ensure that this failure will not be repeated?",
        page: 76,
        section: "14"
    },
    {
        id: 244,
        category: "regulatory",
        subcategory: "enforcement",
        question: "If appropriate, what regulatory actions has or will FDA implement regarding the manufacturers of modRNA COVID-19 vaccines to ensure that this failure will not be repeated?",
        page: 76,
        section: "14"
    },
    {
        id: 245,
        category: "frameshift",
        subcategory: "cryptic proteins",
        question: "Have Pfizer or Moderna submitted any data or risk analysis concerning the possible formation of other kinds of cryptic proteins (cryptides or crypteins) such as those produced from alternate start sites(67,211) or proteolytic cleavage.(212)",
        page: 76,
        section: "14"
    },
    {
        id: 246,
        category: "frameshift",
        subcategory: "assessment",
        question: "Along the lines of the questions enumerated above, will FDA conduct full assessments of past or future harms associated with these proteins, identity root causes for the failure to identify this problem sooner, identify corrective actions to prevent future failures, and to inform the public of these findings?",
        page: 76,
        section: "14"
    },
    {
        id: 247,
        category: "frameshift",
        subcategory: "treatment",
        question: "Will FDA conduct or support the development of methods for the diagnosis, prevention and treatment of harm related to frameshift or other possible cryptic proteins?",
        page: 76,
        section: "14"
    },
    {
        id: 248,
        category: "regulatory",
        subcategory: "gene therapy",
        question: "Will FDA acknowledge the biological reality of these products and regulate them as gene therapies?",
        page: 77,
        section: "15"
    }
];
