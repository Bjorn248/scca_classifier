# Questionnaire Ineligibility Message Bug

## Issue

When a user answers "No" to a question in the eligibility questionnaire, the ineligibility message displays incorrect text. This was observed in Street Touring but likely affects all classes with questionnaires.

## Current Behavior

The message shows:
```
Your car is NOT eligible for Street Touring class.
You answered "No" to the following questions, which resulted in your ineligibility:

Does your car meet the requirements below?
Does your car meet the requirements below?
Does your car meet the requirements below?
```

## Expected Behavior

The message should show the **menu titles** of the questions, not the first sentence of the div ("Does your car meet the requirements below?").

## Fix Location

**Important:** Update the template file, not the generated file:
- Edit: `templates/common.js.tmpl`
- Do NOT edit: `src/common.js`

## Notes

The issue is that the code is extracting the wrong text element from each question div. It should be pulling the menu/section title instead of the introductory sentence.
