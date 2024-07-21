---
title: Paradox of the ravens
seo_title: Paradox of the ravens
summary: What is the relation of the paradox of the ravens to Goodman’s new riddle of induction? Ought they to be solved in the same way?
description: What is the relation of the paradox of the ravens to Goodman’s new riddle of induction? Ought they to be solved in the same way?
slug: paradox-of-ravens
author: Ammar M. Plumber

draft: false
date: 2020-11-17T21:21:46-05:00
lastmod: 2020-12-17T21:21:46-05:00
expiryDate: 
publishDate: 

feature_image: 
feature_image_alt: 

categories:
  - Academic
tags:
  - Philosophy

toc: true
related: true
social_share: true
newsletter: false
disable_comments: false
---
{{< mathjax >}} 

## Introduction 

David Hume’s writing on induction stimulated much argumentation about the justifiability of its application from a logical standpoint. Nelson Goodman suggests that the problem lies not in justifying induction but in establishing what the rules of induction might be: what differentiates claims that are generally accepted as valid inductions from ones that are not. In order to do this, some theory of confirmation must be established so that people can know what evidence counts in favor of a hypothesis and what evidence disconfirms a relevant hypothesis. This essay deals with two problems posed by different authors: Goodman’s green or grue emeralds problem and Hempel’s paradox of the ravens. What these problems are and how they might be dealt with is the subject of later discussion. 

I argue that Bayesian confirmation theory is valuable from a practical standpoint in dealing with problems such as those posed by Goodman’s and Hempel’s, but a theoretical account is lacking regarding how antecedent probability should be quantified in both cases. First, I summarize Bayes’ theorem and provide an example of how it might be applied when evaluating a hypothesis. Subsequently, I describe the paradox of the ravens and explain Fitelson and Hawthorne’s endorsement of Bayesian confirmation theory as a potential solution. Finally, I consider Goodman’s new riddle of induction and discuss the synergies between Goodman’s ideas about the entrenchment of language and the Bayesian approach. I find that logical indeterminacies about the antecedent probability of hypotheses and evidence poses problems for Bayesian confirmation theory. 

## Bayes’ Theorem

Bayes’ theorem can be stated as follows: 

$$P(ℎ | 𝑒) = \frac{P(ℎ) \cdot P(𝑒 | ℎ)}{P(𝑒)}$$

In short, the probability of the hypothesis *h* being true given observation of evidence *e* is equal to the antecedent probability of *h* multiplied by the probability of observing *e* given *h* divided by the unconditional probability of *e*.

To illustrate the usage this theorem, I offer the example of a meningitis diagnosis in a patient with a fever. For the purposes of this example, evidence e will represent the observation of neck stiffness, a distinctive meningitis symptom. Among patients with fevers, assume that 2% have meningitis. Furthermore, let us say that among fevered patients with meningitis, 30% experience neck stiffness, and among those without meningitis, 10% have neck stiffness—what one might call a “false positive” in reference to neck stiffness as a test of meningitis. 

|                   | Have meningitis – 2% | Do not have meningitis – 98% |
| ----------------- | -------------------- | ---------------------------- |
| Neck stiffness    | 30% \* 2% = 0.6%     | 10% \* 98% = 9.8%            |
| No neck stiffness | 70% \* 2% = 1.4%     | 90% \* 98% = 88.2%           |

Hypothesis *h* is that patient *x* has meningitis. The antecedent probability of *h*—*P(h)*—is 2%, the probability that a given fevered patient has meningitis in the absence of any information about the symptom of neck stiffness. The probability of neck stiffness given the assumption that the patient has meningitis is 30%. The unconditional probability of neck stiffness is 0.6% + 9.8% = 10.4%. Thus, the conditional probability of *h* given *e* is as follows: 

$$P(ℎ | 𝑒) = \frac{(0.02 \cdot 0.3)}{0.104} \approx 5.769\%$$

According to Bayesian confirmation theory, evidence *e* confirms a hypothesis *h* if and only if *P(h|e)* > *P(h)*, and e disconfirms a hypothesis if and only if *P(h|e)* < *P(h)*. Because 5.769% > 2% (the antecedent probability of a fevered person having meningitis without any information about neck stiffness), the observation of neck stiffness would count as confirmation of the meningitis hypothesis. 

Before proceeding, it is important to make note of a few details of this example. The antecedent probabilities P(h) and P(e) are not indifferent to evidence. Rather, the evidence that informs the choice of P(h) and P(e) is that evidence which was available before the potential observance of e. One’s prior belief in the 2% antecedent probability of a fevered person having meningitis is rooted in the prior empirical observation of 2% of fevered people having meningitis. Similarly, the unconditional probability of observing neck stiffness, 10.4%, is calculated from the empirical observations that 30% of previously examined meningitis patients and 10% of non-meningitis-patients have been observed to have neck stiffness. A prior body of evidence, therefore, is needed to establish antecedent probabilities unless they are to be wholly arbitrarily and randomly selected. 

Moreover, these antecedent probabilities to some extent depend on positive confirming instances of the phenomena in question. For instance, the belief that 2% of fevered patients have meningitis is difficult (perhaps impossible) to establish without having observed the existence of any meningitis patients. Otherwise, if some doctor had never encountered a meningitis patient among her fevered patients, it is unclear what basis there would be for thinking that 2% of her patients are likely to have meningitis. The same holds true for the antecedent probability of observing neck stiffness. This observation will later be contextualized to the paradox of the ravens, about which authors disagree on the confirmatory significance of observing a non-black non-raven. 

## The Paradox of the Ravens 

Hempel outlines the following scenario. Consider the hypothesis that all ravens are black. Two questions follow from this hypothesis. First, what does the hypothesis imply? Second, what evidence confirms or disconfirms the hypothesis? Regarding this first question, the hypothesis implies both what is directly stated and all logically equivalent statements. For example, it is logically equivalent to say that if something is not black, it is not a raven. Consequently, the hypothesis predicts both that all things that are ravens will be black and that all things that are not black will not be ravens. 

Regarding the second question, clearly, observation of a black raven is consistent with the hypothesis as originally framed and, therefore, helps to confirm it. Note that Hempel affirms an equivalence condition: evidence that confirms one statement also confirms a logically equivalent statement. Given this sensible condition, anything that is not black and not a raven confirms a statement that is logically equivalent to the original hypothesis. Thus, a white piece of chalk would be considered confirmatory evidence. Some might consider this implication paradoxical; how could the color of a piece of chalk say anything about whether or not all ravens are black? Hempel argues that the paradox is an illusion because it confuses two statements. The first statement, which is relevant to the hypothesis, is that a non-black non-raven is observed. The statement being confused is that an object known beforehand to be a piece of chalk is observed to be non-black. In this second case, the information that the chalk is non-white neither confirms nor disconfirms the hypothesis because it is already known that the object is a non-raven. Whether or not it is black, the chalk still bears out both framings of the hypothesis. If something is not black, it is not a raven. A piece of chalk is not a raven, so the hypothesis allows that it may either be black or non-black. So long as an object is black, however, it must be a raven. Hempel further argues that it makes sense that a non-black non-raven would confirm the hypothesis that all ravens are black. While this argument seems acceptable on face, I omit a discussion of it for the sake of concision. 

One problem that Fitelson and Hawthorne point out in Hempel’s argument is that the confirmation relation espoused by his theory is monotonic. In other words, evidence that confirms a hypothesis on its own also confirms the hypothesis relative to any background information. The reason why Fitelson and Hawthorne characterize Hempel’s position is not directly evidenced in Hempel’s “Studies in the Logic of Confirmation”. The authors’ footnote makes reference to Hempel’s hypothetico-deductive approach to confirmation. In any case, let us assume that Fitelson and Hawthorne are correct in alleging this monotonicity. The problem that arises is as follows. Hempel admits that if one knows beforehand that an object is not a raven, the ensuing observation of the object’s color has no confirmatory implications in relation to the hypothesis that all ravens are black; as argued earlier, because a piece of chalk is not a raven, the hypothesis allows that it may either be black or non-black—either outcome is consistent with the hypothesis. However, if the confirmation relation is monotonic, observation of a non-black non-raven should confirm the hypothesis no matter what background information is available. The prior knowledge that an object is a piece of chalk should not affect its confirmatory significance. Thus, if Hempel is correct that prior knowledge of something being a non-raven does affect its confirmatory significance, then an acceptable theory of confirmation cannot allow for monotonicity. 

Fitelson and Hawthorne propose that a Bayesian approach to confirmation resolves this monotonicity problem. As shown earlier, antecedent probabilities—background information—affect the probability of a hypothesis being true given some observation. If something is previously known to be a non-raven, this affects the probability of the object’s color being non-black, and, for this reason, the background information has some bearing on the confirmatory significance of the observation from a statistical standpoint. 

A second important virtue of the Bayesian approach to confirmation in the context of the paradox of the ravens is that it heavily weights “true positive” tests of a hypothesis. For example, in the meningitis example, the observation of a meningitis patient with neck stiffness provides more information about the probability of a patient with a stiff neck having meningitis than does the observation of a non-meningitis patient with no neck stiffness. It is true that the statistical weight of a “true positive” is merely a contingent feature of a hypothesis test, dependent upon the numbers involved. For example, if non-meningitis patients with no neck stiffness were exceedingly rare, then perhaps finding one would confirm/disconfirm a similar hypothesis more strongly than would the discovery of a meningitis patient with neck stiffness. However, regarding the paradox of the ravens, given antecedent probabilities and the distribution of objects in the world, few being ravens and many being non-ravens, as Fitelson and Hawthorne show, the sighting of a black raven more strongly confirms the hypothesis that all ravens are black than does the observation of a white piece of chalk. 

This last argument also engenders a disadvantage of Bayesian confirmation theory: it requires the identification of antecedent probabilities. In the case of a meningitis diagnosis, the antecedent probabilities are based on statistics about prior patients. To some extent, antecedent probabilities are more easily identifiable because of the content of the hypothesis and the neck stiffness test. There happen to be a finite number of people who can be fevered, suffering from meningitis, or experiencing neck stiffness. However, the hypothesis about the ravens, in all of its logical forms, involves an immeasurable number of objects—all ravens and non-ravens. If 1,000,000 objects have been observed, some black ravens and others non-black non-ravens, how can one assess how probable this total body of evidence renders the hypothesis that all ravens are black unless one approximately knows the total number of objects implicated by the hypothesis? A statistician might have better insight into how such a probability could be surmised.  

But, this same problem of antecedent probability becomes more apparent when the body of evidence is artificially limited to ambiguous evidence that may confirm multiple conflicting hypotheses. The example Goodman provides is as follows. The observation of a black raven can be used to confirm multiple different hypotheses. 

1. All things are ravens 
2. All things are black 
3. All things are black ravens 
4. All things that are ravens are black 

After seeing this black raven, each of these hypotheses may seem equally probable to a subject. Moreover, the antecedent probability of each of these hypotheses is indeterminate given the potentially infinite number of things outside of the previously observed black raven. An additional piece of evidence, say another black raven, may be entirely unhelpful in assessing the Bayesian probability of these hypotheses or identifying the most likely among them. Given the indeterminacy of antecedent probabilities for many hypotheses, perhaps the only recourse is for subjects to use psychologically wired instincts to intuitively assign antecedent probabilities to hypotheses and evidence. One subject, upon seeing the black raven, might be neurologically inclined to assess the notion that all things are black ravens as more probable than the other hypotheses. Another might find the idea that all things are black more intuitively probable. Of course, this suggestion only serves to explain how subjects might assess the probability of hypotheses as a practical matter, but it does not logically justify any such practice. The question suggests itself of whether or not it is possible to logically eliminate indeterminacies in antecedent probability that are intrinsic to Bayesian confirmation theory, and it appears (to me, as a non-statistician) that it is not. I will return to this discussion of antecedent probability when I discuss Goodman’s new riddle of induction and his example of emeralds. 

## Goodman’s New Riddle of Induction 

Goodman’s emeralds example is summarized as follows. Some body of evidence consists of emeralds that appear to be the color green before time *t*. It is not yet known how any unobserved emeralds will appear after time *t*. Consider a predicate “grue” that refers to things that appear green before time *t* and blue after time *t*. Two different hypotheses are under consideration. The first is that all emeralds are green. The second is that all emeralds are grue. Both hypotheses are equally confirmed by the body of evidence, which is an apparent problem because of their mutual exclusivity and because of the intuitive ridiculousness of the grueness hypothesis. There appears to be no reason to surmise that the predicate “green” is characteristic of emeralds any more than is the predicate “grue”. It is in this regard that Goodman’s new riddle of induction can be compared to the paradox of the ravens. As Goodman points out, the information that an observed object is a black raven supports multiple different hypotheses, and it is indeterminate which is better supported. Similarly, the observation of many emeralds may support multiple hypotheses about the relation of emeralds to different predicates. 
Like the paradox of the ravens, Bayesian confirmation theory is potentially promising in dealing with Goodman’s new riddle of induction in two respects: practical and theoretical. First, I will roughly sketch how a Bayesian approach might be employed in the context of the emeralds example. Hypothesis 1 (*h1*) states that all emeralds are green. Hypothesis 2 (*h2*) states that all emeralds are grue. The probability of both hypotheses are represented below. 

$$P(ℎ_1 | 𝑒) = \frac{P(ℎ_1) + P(𝑒 | ℎ_1)}{P(𝑒)}$$

$$P(ℎ_2 | 𝑒) = \frac{P(ℎ_2) + P(𝑒 | ℎ_2)}{P(𝑒)}$$

The unconditional probability of the observed evidence is constant, and, therefore, the denominators on the right sides of the first and second equations are equal. Second, the conditional probabilities of the observed evidence assuming the truth of the hypotheses are both equal. Thus, the second terms in the numerators on the right sides of both equations are also equal. The equations can be combined as follows. 

$$\frac{P(ℎ_1|𝑒)}{P(ℎ_2|𝑒)} = \frac{P(ℎ_1)}{P(ℎ_2)}$$

Which hypothesis is more probable given the observed evidence depends entirely on which hypothesis was assessed as more antecedently probable before the relevant evidence was observed. Because only the observed color of emeralds can serve as evidence of each hypothesis, neither can be deemed more antecedently probable prior to the observation of this evidence (nor after).

Despite these indeterminacies, Bayes’ theorem may turn out both practically and theoretically promising in dealing with this hypothesis for a few reasons. From a practical standpoint, it formalizes individuals’ ability to subjectively assign certain antecedent probabilities to hypotheses that they find more or less intuitively believable. Few individuals are likely to assign a significant probability to the hypothesis that all emeralds are grue—green until *t* and blue after *t*. Again, as noted earlier, this opportunity for subjective assessment does not correspond to logic. Thus, assessing the grueness hypothesis as less probable must still be logically justified. 

Goodman’s account of the entrenchment of language holds great promise for helping to discriminate between the two hypotheses about emeralds. As Goodman argues, predicates like “grue” have been empirically unhelpful in predicting qualities about other things in the world. As a result, the predicate “green” has become more linguistically entrenched, and people are therefore in the habit of making predictions using predicates like green as opposed to predicates like grue. One might argue that the relative empirical success of predicates like green should bear on the antecedent probabilities ascribed to the two hypotheses. Because hypotheses containing green have been successful in the past, the antecedent probability of another hypothesis that something is green should perhaps be considered greater than the antecedent probability that something is grue, resolving the apparent paradox. 

However, a few problems arise from this thinking. First, until time t has been passed, it cannot be said that hypotheses containing green have been more empirically confirmed than hypotheses containing grue. One might argue that while hypotheses containing grue itself may not have been previously confirmed or disconfirmed, other hypotheses using predicates of its kind from times in the past would be easily empirically disconfirmed. But, as Goodman would argue, it is unclear what predicates are “of the same kind” as grue. If these predicates are to be isolated on the basis of their reference to a point in time, it is not obvious that green is any different. After all, green can be defined as “grue” until *t* and “bleen” after *t*. Swinburne deals interestingly with the issue of categorizing predicates by their reference to locational or positional properties. Again, for the sake of concision, I shall omit a discussion of his argument as well as of Blackburn’s and conclude with a summary of what has been learned about the potential for Bayesian confirmation theory to deal with these two problems—the paradox of the ravens and Goodman’s new riddle of induction.	 

## Conclusion 

I find that Bayesian confirmation theory’s formalization of priors (subjective notions of antecedent probability) may have practical applications to inductive tasks but does not provide a foolproof logical framework, as these antecedent probabilities are often subject to pervasive indeterminacies, as I have shown. In the paradox of the ravens, a Bayesian framework does not help to discriminate between multiple conflicting hypotheses, as each is equally empirically supported by the preexisting body of evidence. The same was true for the grue and green hypotheses. As such, any antecedent probabilities that are decided upon must be done so on the basis of subjective intuition. In conclusion, I offer two overarching conclusions from the preceding analysis. First, I show that the grueness example and the paradox of the ravens are similar with regard to the problem of equally confirmed hypotheses. Second, I find that Bayesian confirmation theory, though practically useful in formalizing subjective feelings about antecedent probability, ultimately cannot resolve either from a logic standpoint. Whether or not some other theory of confirmation holds promise in resolving these paradoxes merits further academic discussion. 