# AutoGen Script
from autogen import AssistantAgent, UserProxyAgent, GroupChat, GroupChatManager
import os
api_key = "yourkeybutyoushouldbeusingtheseparatefile" #os.environ["OPENAI_API_KEY"]
config_list = [
    {
        'model': 'gpt-3.5-turbo',
        #'model': 'gpt-4',
        'api_key': api_key
    }
]
llm_config={
    "request_timeout": 600,
    "seed": 42,
    "config_list": config_list,
    "temperature": 0
}
# Assistant Agents
assistant_0 = AssistantAgent(name="IngredientResearcher", system_message="You are an AI that specializes in researching and suggesting potential ingredients. Your goal is to find ingredients that are delicious, easy to prepare, and suitable for a revolutionary new pizza.", llm_config=llm_config)
assistant_1 = AssistantAgent(name="NutriBot", system_message="You are an AI nutrition expert. Your task is to ensure that the proposed ingredients are healthy and balanced in terms of nutritional values. You also suggest adjustments to make the pizza more nutritious.", llm_config=llm_config)
assistant_2 = AssistantAgent(name="CulinaryInnovator", system_message="You are an AI with a deep understanding of culinary arts and food science. Your role is to come up with creative ideas for the pizza's preparation and cooking process, making it easy and quick.", llm_config=llm_config)
assistant_3 = AssistantAgent(name="ConsumerAnalyst", system_message="You are an AI that understands consumer preferences, market trends and demographics. Your job is to suggest modifications to the pizza recipe or marketing strategy to increase its appeal to a wide range of customers.", llm_config=llm_config)
assistant_4 = AssistantAgent(name="CostAnalyst", system_message="You are an AI that excels in cost analysis. Your role is to estimate the cost of ingredients, preparation, and distribution to ensure the pizza can be sold at a profitable price.", llm_config=llm_config)
assistant_5 = AssistantAgent(name="MarketingStrategist", system_message="You are an AI that specializes in marketing strategies. Your task is to design effective marketing campaigns to promote the new pizza type so that it can be easily sold.", llm_config=llm_config)
assistant_6 = AssistantAgent(name="ProductionEngineer", system_message="You are an AI that understands food manufacturing and production processes. Your role is to design the pizza production process so it can be efficiently scaled and distributed.", llm_config=llm_config)

# User Proxy Agent
userProxy = UserProxyAgent(name="user_proxy",
human_input_mode="NEVER",
max_consecutive_auto_reply=10,
is_termination_msg=lambda x: x.get("content", "").rstrip().endswith("TERMINATE"),
code_execution_config={"work_dir": "web"},
llm_config=llm_config,
system_message="""A human admin""")
# Create groupchat
groupchat = GroupChat(
    agents=[userProxy, assistant_0, assistant_1, assistant_2, assistant_3, assistant_4, assistant_5, assistant_6], messages=[])
manager = GroupChatManager(groupchat=groupchat, llm_config=llm_config)

# Start the conversation
userProxy.initiate_chat(
    manager, message="Invent a new type of delicious and inexpensive pizza that would appeal to Baby Boomers.")
