"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2934:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(3117),i=(n(7294),n(3905));const r={sidebar_label:"qdrant_retrieve_user_proxy_agent",title:"agentchat.contrib.qdrant_retrieve_user_proxy_agent"},l=void 0,o={unversionedId:"reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent",id:"reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent",isDocsHomePage:!1,title:"agentchat.contrib.qdrant_retrieve_user_proxy_agent",description:"QdrantRetrieveUserProxyAgent Objects",source:"@site/docs/reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent",permalink:"/autogen/docs/reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent",editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/qdrant_retrieve_user_proxy_agent.md",tags:[],version:"current",frontMatter:{sidebar_label:"qdrant_retrieve_user_proxy_agent",title:"agentchat.contrib.qdrant_retrieve_user_proxy_agent"},sidebar:"referenceSideBar",previous:{title:"multimodal_conversable_agent",permalink:"/autogen/docs/reference/agentchat/contrib/multimodal_conversable_agent"},next:{title:"retrieve_assistant_agent",permalink:"/autogen/docs/reference/agentchat/contrib/retrieve_assistant_agent"}},s=[{value:"QdrantRetrieveUserProxyAgent Objects",id:"qdrantretrieveuserproxyagent-objects",children:[{value:"__init__",id:"__init__",children:[],level:4},{value:"retrieve_docs",id:"retrieve_docs",children:[],level:4},{value:"create_qdrant_from_dir",id:"create_qdrant_from_dir",children:[],level:4},{value:"query_qdrant",id:"query_qdrant",children:[],level:4}],level:2}],d={toc:s};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"qdrantretrieveuserproxyagent-objects"},"QdrantRetrieveUserProxyAgent Objects"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"class QdrantRetrieveUserProxyAgent(RetrieveUserProxyAgent)\n")),(0,i.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def __init__(name="RetrieveChatAgent",\n             human_input_mode: Optional[str] = "ALWAYS",\n             is_termination_msg: Optional[Callable[[Dict], bool]] = None,\n             retrieve_config: Optional[Dict] = None,\n             **kwargs)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name")," ",(0,i.kt)("em",{parentName:"li"},"str")," - name of the agent."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"human_input_mode")," ",(0,i.kt)("em",{parentName:"li"},"str"),' - whether to ask for human inputs every time a message is received.\nPossible values are "ALWAYS", "TERMINATE", "NEVER".\n(1) When "ALWAYS", the agent prompts for human input every time a message is received.\nUnder this mode, the conversation stops when the human input is "exit",\nor when is_termination_msg is True and there is no human input.\n(2) When "TERMINATE", the agent only prompts for human input only when a termination message is received or\nthe number of auto reply reaches the max_consecutive_auto_reply.\n(3) When "NEVER", the agent will never prompt for human input. Under this mode, the conversation stops\nwhen the number of auto reply reaches the max_consecutive_auto_reply or when is_termination_msg is True.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"is_termination_msg")," ",(0,i.kt)("em",{parentName:"li"},"function"),' - a function that takes a message in the form of a dictionary\nand returns a boolean value indicating if this received message is a termination message.\nThe dict can contain the following keys: "content", "role", "name", "function_call".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"retrieve_config")," ",(0,i.kt)("em",{parentName:"li"},"dict or None")," - config for the retrieve agent.\nTo use default config, set to None. Otherwise, set to a dictionary with the following keys:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'task (Optional, str): the task of the retrieve chat. Possible values are "code", "qa" and "default". System\nprompt will be different for different tasks. The default value is ',(0,i.kt)("inlineCode",{parentName:"li"},"default"),", which supports both code and qa."),(0,i.kt)("li",{parentName:"ul"},'client (Optional, qdrant_client.QdrantClient(":memory:")): A QdrantClient instance. If not provided, an in-memory instance will be assigned. Not recommended for production.\nwill be used. If you want to use other vector db, extend this class and override the ',(0,i.kt)("inlineCode",{parentName:"li"},"retrieve_docs")," function."),(0,i.kt)("li",{parentName:"ul"},"docs_path (Optional, Union[str, List","[str]","]): the path to the docs directory. It can also be the path to a single file,\nthe url to a single file or a list of directories, files and urls. Default is None, which works only if the collection is already created."),(0,i.kt)("li",{parentName:"ul"},'extra_docs (Optional, bool): when true, allows adding documents with unique IDs without overwriting existing ones; when false, it replaces existing documents using default IDs, risking collection overwrite.,\nwhen set to true it enables the system to assign unique IDs starting from "length+i" for new document chunks, preventing the replacement of existing documents and facilitating the addition of more content to the collection..\nBy default, "extra_docs" is set to false, starting document IDs from zero. This poses a risk as new documents might overwrite existing ones, potentially causing unintended loss or alteration of data in the collection.'),(0,i.kt)("li",{parentName:"ul"},"collection_name (Optional, str): the name of the collection.\nIf key not provided, a default name ",(0,i.kt)("inlineCode",{parentName:"li"},"autogen-docs")," will be used."),(0,i.kt)("li",{parentName:"ul"},"model (Optional, str): the model to use for the retrieve chat.\nIf key not provided, a default model ",(0,i.kt)("inlineCode",{parentName:"li"},"gpt-4")," will be used."),(0,i.kt)("li",{parentName:"ul"},"chunk_token_size (Optional, int): the chunk token size for the retrieve chat.\nIf key not provided, a default size ",(0,i.kt)("inlineCode",{parentName:"li"},"max_tokens * 0.4")," will be used."),(0,i.kt)("li",{parentName:"ul"},"context_max_tokens (Optional, int): the context max token size for the retrieve chat.\nIf key not provided, a default size ",(0,i.kt)("inlineCode",{parentName:"li"},"max_tokens * 0.8")," will be used."),(0,i.kt)("li",{parentName:"ul"},'chunk_mode (Optional, str): the chunk mode for the retrieve chat. Possible values are\n"multi_lines" and "one_line". If key not provided, a default mode ',(0,i.kt)("inlineCode",{parentName:"li"},"multi_lines")," will be used."),(0,i.kt)("li",{parentName:"ul"},'must_break_at_empty_line (Optional, bool): chunk will only break at empty line if True. Default is True.\nIf chunk_mode is "one_line", this parameter will be ignored.'),(0,i.kt)("li",{parentName:"ul"},"embedding_model (Optional, str): the embedding model to use for the retrieve chat.\nIf key not provided, a default model ",(0,i.kt)("inlineCode",{parentName:"li"},"BAAI/bge-small-en-v1.5")," will be used. All available models\ncan be found at ",(0,i.kt)("inlineCode",{parentName:"li"},"https://qdrant.github.io/fastembed/examples/Supported_Models/"),"."),(0,i.kt)("li",{parentName:"ul"},"customized_prompt (Optional, str): the customized prompt for the retrieve chat. Default is None."),(0,i.kt)("li",{parentName:"ul"},'customized_answer_prefix (Optional, str): the customized answer prefix for the retrieve chat. Default is "".\nIf not "" and the customized_answer_prefix is not in the answer, ',(0,i.kt)("inlineCode",{parentName:"li"},"Update Context")," will be triggered."),(0,i.kt)("li",{parentName:"ul"},"update_context (Optional, bool): if False, will not apply ",(0,i.kt)("inlineCode",{parentName:"li"},"Update Context")," for interactive retrieval. Default is True."),(0,i.kt)("li",{parentName:"ul"},"custom_token_count_function (Optional, Callable): a custom function to count the number of tokens in a string.\nThe function should take a string as input and return three integers (token_count, tokens_per_message, tokens_per_name).\nDefault is None, tiktoken will be used and may not be accurate for non-OpenAI models."),(0,i.kt)("li",{parentName:"ul"},"custom_text_split_function (Optional, Callable): a custom function to split a string into a list of strings.\nDefault is None, will use the default function in ",(0,i.kt)("inlineCode",{parentName:"li"},"autogen.retrieve_utils.split_text_to_chunks"),"."),(0,i.kt)("li",{parentName:"ul"},"custom_text_types (Optional, List","[str]","): a list of file types to be processed. Default is ",(0,i.kt)("inlineCode",{parentName:"li"},"autogen.retrieve_utils.TEXT_FORMATS"),".\nThis only applies to files under the directories in ",(0,i.kt)("inlineCode",{parentName:"li"},"docs_path"),". Explictly included files and urls will be chunked regardless of their types."),(0,i.kt)("li",{parentName:"ul"},"recursive (Optional, bool): whether to search documents recursively in the docs_path. Default is True."),(0,i.kt)("li",{parentName:"ul"},"parallel (Optional, int): How many parallel workers to use for embedding. Defaults to the number of CPU cores."),(0,i.kt)("li",{parentName:"ul"},"on_disk (Optional, bool): Whether to store the collection on disk. Default is False."),(0,i.kt)("li",{parentName:"ul"},"quantization_config: Quantization configuration. If None, quantization will be disabled."),(0,i.kt)("li",{parentName:"ul"},"hnsw_config: HNSW configuration. If None, default configuration will be used.\nYou can find more info about the hnsw configuration options at ",(0,i.kt)("a",{parentName:"li",href:"https://qdrant.tech/documentation/concepts/indexing/%60vector%60-index"},"https://qdrant.tech/documentation/concepts/indexing/`vector`-index"),".\nAPI Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_collection"},"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_collection")),(0,i.kt)("li",{parentName:"ul"},"payload_indexing: Whether to create a payload index for the document field. Default is False.\nYou can find more info about the payload indexing options at ",(0,i.kt)("a",{parentName:"li",href:"https://qdrant.tech/documentation/concepts/indexing/%60payload%60-index"},"https://qdrant.tech/documentation/concepts/indexing/`payload`-index"),"\nAPI Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_field_index"},"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_field_index")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"**kwargs")," ",(0,i.kt)("em",{parentName:"li"},"dict")," - other kwargs in ",(0,i.kt)("a",{parentName:"li",href:"../user_proxy_agent#__init__"},"UserProxyAgent"),".")),(0,i.kt)("h4",{id:"retrieve_docs"},"retrieve","_","docs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def retrieve_docs(problem: str, n_results: int = 20, search_string: str = "")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"problem")," ",(0,i.kt)("em",{parentName:"li"},"str")," - the problem to be solved."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n_results")," ",(0,i.kt)("em",{parentName:"li"},"int")," - the number of results to be retrieved. Default is 20."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search_string")," ",(0,i.kt)("em",{parentName:"li"},"str"),' - only docs that contain an exact match of this string will be retrieved. Default is "".')),(0,i.kt)("h4",{id:"create_qdrant_from_dir"},"create","_","qdrant","_","from","_","dir"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def create_qdrant_from_dir(\n        dir_path: str,\n        max_tokens: int = 4000,\n        client: QdrantClient = None,\n        collection_name: str = "all-my-documents",\n        chunk_mode: str = "multi_lines",\n        must_break_at_empty_line: bool = True,\n        embedding_model: str = "BAAI/bge-small-en-v1.5",\n        custom_text_split_function: Callable = None,\n        custom_text_types: List[str] = TEXT_FORMATS,\n        recursive: bool = True,\n        extra_docs: bool = False,\n        parallel: int = 0,\n        on_disk: bool = False,\n        quantization_config: Optional[models.QuantizationConfig] = None,\n        hnsw_config: Optional[models.HnswConfigDiff] = None,\n        payload_indexing: bool = False,\n        qdrant_client_options: Optional[Dict] = {})\n')),(0,i.kt)("p",null,"Create a Qdrant collection from all the files in a given directory, the directory can also be a single file or a\nurl to a single file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dir_path")," ",(0,i.kt)("em",{parentName:"li"},"str")," - the path to the directory, file or url."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"max_tokens")," ",(0,i.kt)("em",{parentName:"li"},"Optional, int")," - the maximum number of tokens per chunk. Default is 4000."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client")," ",(0,i.kt)("em",{parentName:"li"},"Optional, QdrantClient")," - the QdrantClient instance. Default is None."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection_name")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the name of the collection. Default is "all-my-documents".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chunk_mode")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the chunk mode. Default is "multi_lines".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"must_break_at_empty_line")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to break at empty line. Default is True."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding_model")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the embedding model to use. Default is "BAAI/bge-small-en-v1.5".\nThe list of all the available models can be at ',(0,i.kt)("a",{parentName:"li",href:"https://qdrant.github.io/fastembed/examples/Supported_Models/"},"https://qdrant.github.io/fastembed/examples/Supported_Models/"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom_text_split_function")," ",(0,i.kt)("em",{parentName:"li"},"Optional, Callable")," - a custom function to split a string into a list of strings.\nDefault is None, will use the default function in ",(0,i.kt)("inlineCode",{parentName:"li"},"autogen.retrieve_utils.split_text_to_chunks"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"custom_text_types")," ",(0,i.kt)("em",{parentName:"li"},"Optional, List","[str]")," - a list of file types to be processed. Default is TEXT_FORMATS."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"recursive")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - whether to search documents recursively in the dir_path. Default is True."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extra_docs")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - whether to add more documents in the collection. Default is False"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"parallel")," ",(0,i.kt)("em",{parentName:"li"},"Optional, int")," - How many parallel workers to use for embedding. Defaults to the number of CPU cores"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"on_disk")," ",(0,i.kt)("em",{parentName:"li"},"Optional, bool")," - Whether to store the collection on disk. Default is False."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quantization_config")," - Quantization configuration. If None, quantization will be disabled."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," - ",(0,i.kt)("a",{parentName:"li",href:"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_collection"},"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hnsw_config")," - HNSW configuration. If None, default configuration will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," - ",(0,i.kt)("a",{parentName:"li",href:"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_collection"},"https://qdrant.github.io/qdrant/redoc/index.html#tag/collections/operation/create_collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payload_indexing")," - Whether to create a payload index for the document field. Default is False."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qdrant_client_options")," - (Optional, dict): the options for instantiating the qdrant client."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ref")," - ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/qdrant/qdrant-client/blob/master/qdrant_client/qdrant_client.py#L36-L58"},"https://github.com/qdrant/qdrant-client/blob/master/qdrant_client/qdrant_client.py#L36-L58"),".")),(0,i.kt)("h4",{id:"query_qdrant"},"query","_","qdrant"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'def query_qdrant(\n        query_texts: List[str],\n        n_results: int = 10,\n        client: QdrantClient = None,\n        collection_name: str = "all-my-documents",\n        search_string: str = "",\n        embedding_model: str = "BAAI/bge-small-en-v1.5",\n        qdrant_client_options: Optional[Dict] = {}\n) -> List[List[QueryResponse]]\n')),(0,i.kt)("p",null,"Perform a similarity search with filters on a Qdrant collection"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"query_texts")," ",(0,i.kt)("em",{parentName:"li"},"List","[str]")," - the query texts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n_results")," ",(0,i.kt)("em",{parentName:"li"},"Optional, int")," - the number of results to return. Default is 10."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"client")," ",(0,i.kt)("em",{parentName:"li"},"Optional, API")," - the QdrantClient instance. A default in-memory client will be instantiated if None."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection_name")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the name of the collection. Default is "all-my-documents".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"search_string")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the search string. Default is "".'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding_model")," ",(0,i.kt)("em",{parentName:"li"},"Optional, str"),' - the embedding model to use. Default is "all-MiniLM-L6-v2". Will be ignored if embedding_function is not None.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"qdrant_client_options")," - (Optional, dict): the options for instantiating the qdrant client. Reference: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/qdrant/qdrant-client/blob/master/qdrant_client/qdrant_client.py#L36-L58"},"https://github.com/qdrant/qdrant-client/blob/master/qdrant_client/qdrant_client.py#L36-L58"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"List[List[QueryResponse]]"),' - the query result. The format is:\nclass QueryResponse(BaseModel, extra="forbid"):  # type: ignore'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," - Union","[str, int]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"embedding")," - Optional[List","[float]","]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"metadata")," - Dict","[str, Any]"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"document")," - str"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"score")," - float")))}p.isMDXComponent=!0}}]);