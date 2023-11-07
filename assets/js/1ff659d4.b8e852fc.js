"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5553],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7784:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="Installation",l={unversionedId:"Installation",id:"Installation",isDocsHomePage:!1,title:"Installation",description:"Setup Virtual Environment",source:"@site/docs/Installation.md",sourceDirName:".",slug:"/Installation",permalink:"/autogen/docs/Installation",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Getting Started",permalink:"/autogen/docs/Getting-Started"},next:{title:"Multi-agent Conversation Framework",permalink:"/autogen/docs/Use-Cases/agent_chat"}},p=[{value:"Setup Virtual Environment",id:"setup-virtual-environment",children:[{value:"Option 1: venv",id:"option-1-venv",children:[],level:3},{value:"Option 2: conda",id:"option-2-conda",children:[],level:3}],level:2},{value:"Python",id:"python",children:[{value:"Migration guide to v0.2",id:"migration-guide-to-v02",children:[],level:3},{value:"Optional Dependencies",id:"optional-dependencies",children:[],level:3}],level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"setup-virtual-environment"},"Setup Virtual Environment"),(0,o.kt)("p",null,"When not using a docker container, we recommend using a virtual environment to install AutoGen. This will ensure that the dependencies for AutoGen are isolated from the rest of your system."),(0,o.kt)("h3",{id:"option-1-venv"},"Option 1: venv"),(0,o.kt)("p",null,"You can create a virtual environment with ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python3 -m venv pyautogen\nsource pyautogen/bin/activate\n")),(0,o.kt)("p",null,"The following command will deactivate the current ",(0,o.kt)("inlineCode",{parentName:"p"},"venv")," environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,o.kt)("h3",{id:"option-2-conda"},"Option 2: conda"),(0,o.kt)("p",null,"Another option is with ",(0,o.kt)("inlineCode",{parentName:"p"},"Conda"),", Conda works better at solving dependency conflicts than pip. You can install it by following ",(0,o.kt)("a",{parentName:"p",href:"https://docs.conda.io/projects/conda/en/stable/user-guide/install/index.html"},"this doc"),",\nand then create a virtual environment as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda create -n pyautogen python=3.10  # python 3.10 is recommended as it's stable and not too old\nconda activate pyautogen\n")),(0,o.kt)("p",null,"The following command will deactivate the current ",(0,o.kt)("inlineCode",{parentName:"p"},"conda")," environment:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"conda deactivate\n")),(0,o.kt)("p",null,"Now, you're ready to install AutoGen in the virtual environment you've just created."),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"AutoGen requires ",(0,o.kt)("strong",{parentName:"p"},"Python version >= 3.8, < 3.12"),". It can be installed from pip:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pyautogen\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pyautogen<0.2")," requires ",(0,o.kt)("inlineCode",{parentName:"p"},"openai<1"),". Starting from pyautogen v0.2, ",(0,o.kt)("inlineCode",{parentName:"p"},"openai>=1")," is required."),(0,o.kt)("h3",{id:"migration-guide-to-v02"},"Migration guide to v0.2"),(0,o.kt)("p",null,"openai v1 is a total rewrite of the library with many breaking changes. For example, the inference requires instantiating a client, instead of using a global class method.\nTherefore, some changes are required for users of ",(0,o.kt)("inlineCode",{parentName:"p"},"pyautogen<0.2"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"api_base")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"base_url"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"request_timeout")," -> ",(0,o.kt)("inlineCode",{parentName:"li"},"timeout")," in ",(0,o.kt)("inlineCode",{parentName:"li"},"llm_config")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"config_list"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"max_retry_period")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"retry_wait_time")," are deprecated. ",(0,o.kt)("inlineCode",{parentName:"li"},"max_retries")," can be set for each client."),(0,o.kt)("li",{parentName:"ul"},"MathChat, TeachableAgent are unsupported until they are tested in future release."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"autogen.Completion")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"autogen.ChatCompletion")," are deprecated. The essential functionalities are moved to ",(0,o.kt)("inlineCode",{parentName:"li"},"autogen.OpenAIWrapper"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from autogen import OpenAIWrapper\nclient = OpenAIWrapper(config_list=config_list)\nresponse = client.create(messages=[{"role": "user", "content": "2+2="}])\nprint(client.extract_text_or_function_call(response))\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Inference parameter tuning and inference logging features are currently unavailable in ",(0,o.kt)("inlineCode",{parentName:"li"},"OpenAIWrapper"),". Logging will be added in a future release.\nInference parameter tuning can be done via ",(0,o.kt)("a",{parentName:"li",href:"https://microsoft.github.io/FLAML/docs/Use-Cases/Tune-User-Defined-Function"},(0,o.kt)("inlineCode",{parentName:"a"},"flaml.tune")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"use_cache")," is removed as a kwarg in ",(0,o.kt)("inlineCode",{parentName:"li"},"OpenAIWrapper.create()")," for being automatically decided by ",(0,o.kt)("inlineCode",{parentName:"li"},"seed"),": int | None.")),(0,o.kt)("h3",{id:"optional-dependencies"},"Optional Dependencies"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"docker"},"docker"))),(0,o.kt)("p",null,"For the best user experience and seamless code execution, we highly recommend using Docker with AutoGen. Docker is a containerization platform that simplifies the setup and execution of your code. Developing in a docker container, such as GitHub Codespace, also makes the development convenient."),(0,o.kt)("p",null,"When running AutoGen out of a docker container, to use docker for code execution, you also need to install the python package ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install docker\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"blendsearch"},"blendsearch"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pyautogen<0.2")," offers a cost-effective hyperparameter optimization technique ",(0,o.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2303.04673"},"EcoOptiGen")," for tuning Large Language Models. Please install with the ","[blendsearch]"," option to use it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "pyautogen[blendsearch]<0.2"\n')),(0,o.kt)("p",null,"Example notebooks:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_completion.ipynb"},"Optimize for Code Generation")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/oai_chatgpt_gpt4.ipynb"},"Optimize for Math")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"retrievechat"},"retrievechat"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pyautogen<0.2")," supports retrieval-augmented generation tasks such as question answering and code generation with RAG agents. Please install with the ","[retrievechat]"," option to use it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "pyautogen[retrievechat]<0.2"\n')),(0,o.kt)("p",null,"RetrieveChat can handle various types of documents. By default, it can process\nplain text and PDF files, including formats such as 'txt', 'json', 'csv', 'tsv',\n'md', 'html', 'htm', 'rtf', 'rst', 'jsonl', 'log', 'xml', 'yaml', 'yml' and 'pdf'.\nIf you install ",(0,o.kt)("a",{parentName:"p",href:"https://unstructured-io.github.io/unstructured/installation/full_installation.html"},"unstructured"),"\n(",(0,o.kt)("inlineCode",{parentName:"p"},'pip install "unstructured[all-docs]"'),"), additional document types such as 'docx',\n'doc', 'odt', 'pptx', 'ppt', 'xlsx', 'eml', 'msg', 'epub' will also be supported."),(0,o.kt)("p",null,"You can find a list of all supported document types by using ",(0,o.kt)("inlineCode",{parentName:"p"},"autogen.retrieve_utils.TEXT_FORMATS"),"."),(0,o.kt)("p",null,"Example notebooks:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_RetrieveChat.ipynb"},"Automated Code Generation and Question Answering with Retrieval Augmented Agents")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_groupchat_RAG.ipynb"},"Group Chat with Retrieval Augmented Generation (with 5 group member agents and 1 manager agent)")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_qdrant_RetrieveChat.ipynb"},"Automated Code Generation and Question Answering with Qdrant based Retrieval Augmented Agents")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"large-multimodal-model-lmm-agents"},"Large Multimodal Model (LMM) Agents"))),(0,o.kt)("p",null,"We offered Multimodal Conversable Agent and LLaVA Agent. Please install with the ","[lmm]"," option to use it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "pyautogen[lmm]"\n')),(0,o.kt)("p",null,"Example notebooks:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_lmm_llava.ipynb"},"LLaVA Agent")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"mathchat"},"mathchat"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pyautogen<0.2")," offers an experimental agent for math problem solving. Please install with the ","[mathchat]"," option to use it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pip install "pyautogen[mathchat]<0.2"\n')),(0,o.kt)("p",null,"Example notebooks:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/autogen/blob/main/notebook/agentchat_MathChat.ipynb"},"Using MathChat to Solve Math Problems")))}u.isMDXComponent=!0}}]);