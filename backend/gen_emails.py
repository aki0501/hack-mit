import openai

openai.api_key = "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"

# should actually just be politician name.
name = "Bill Nelson"

# summary will just be the summary of the bill.
summary = "NEPA declared a national policy to protect the environment and created the Council on Environmental Quality (CEQ) within the President's Executive Office. To implement the policy, NEPA requires that federal agencies consider the environmental impacts of any major federal action."

prompt = "Write an email to your legislator" + name + ", showcasing your support for this bill description: " + summary


completion = openai.ChatCompletion.create(model = "gpt-3.5-turbo",
                                          messages = [{
                                                "role": "user",
                                                "content": prompt
                                          }])

email_content = completion.choices[0].message.content

print(email_content)