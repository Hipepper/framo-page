/**
 * FramerSnap Landing & Legal Pages - Universal Client-Side i18n
 * Automatic language detection:
 * 1. URL parameter (?lang=en or ?lang=zh)
 * 2. localStorage ('framersnap_lang')
 * 3. System / Browser navigator.language (starts with 'zh' -> 'zh', else -> 'en')
 */
(function() {
  const translations = {
    zh: {
      // Common & Navigation
      "doc_title": "FramerSnap — 从看见，到选定，一气呵成 | macOS 原生摄影看图与排版暗房",
      "doc_desc": "专为 Mac 设计的轻快照片工作流。打开即看整个文件夹，沉浸式挑图、智能无损压缩、批量格式转换与大师艺术相框排版。100% 本地离线运行，严密守护摄影隐私。",
      "nav_flow": "工作流",
      "nav_details": "核心能力",
      "nav_gallery": "真实画廊",
      "nav_pricing": "方案定价",
      "nav_support": "技术支持",
      "nav_download": "下载 Mac 版",
      "nav_home": "官网首页",
      "lang_label": "English",
      "back_home": "← 返回官网首页",
      "footer_rights": "© 2026 FramerSnap. 保留所有权利。",
      "footer_privacy": "隐私政策",
      "footer_terms": "服务条款 (EULA)",
      "footer_support": "技术支持与 FAQ",

      // Hero
      "hero_eyebrow": "不止是看图软件",
      "hero_title": "从看见，到选定。<br><span class=\"gradient-word\">一气呵成。</span>",
      "hero_lede": "打开一张照片，即刻浏览整个文件夹。<strong>看图、挑图、轻处理、排版交付</strong>，不再反复跳转 Finder、预览与笨重修图工具。",
      "hero_explore": "看看它如何工作 ↓",
      "hero_sysnote": "原生适配 Apple Silicon & Intel · macOS 14.0 及以上 · 纯本地隐私安全",

      // Stage
      "tab1_title": "一张打开，整组就位",
      "tab1_note": "不必先导入图库；点开任意照片，同文件夹影像自动出现在底部胶片带。",
      "tab1_badge": "01 / OPEN",
      "tab1_name": "打开即浏览",

      "tab2_title": "看到喜欢的，顺手留下",
      "tab2_note": "在照片上直接调出快捷动作，多选后移入精选；不用记住文件名，也不用来回拖拽。",
      "tab2_badge": "02 / PICK",
      "tab2_name": "边看边挑",

      "tab3_title": "标准画幅，快速重构",
      "tab3_note": "电影宽荧幕、现代宽屏、经典竖构图等常用比例一键切换，拖动即可完成二次构图。",
      "tab3_badge": "03 / REFINE",
      "tab3_name": "快速构图",

      "tab4_title": "一键装裱，让作品完整呈现",
      "tab4_note": "加入留白、阴影与拍摄参数，用精美艺术相框把照片从文件变成可以直接分享的作品。",
      "tab4_badge": "04 / FRAME",
      "tab4_name": "大师相框",

      "tab5_title": "选完，就能交付",
      "tab5_note": "批量转换、压缩或直接 AirDrop，把最后几步合并成一次自然收尾。",
      "tab5_badge": "05 / DELIVER",
      "tab5_name": "批量交付",

      // Problem
      "prob_label": "Why FramerSnap",
      "prob_title": "拍完照片后，真正拖慢你的，往往不是创作。<em>是那些零碎的小动作。</em>",
      "prob_p1": "在 Finder 找文件，用预览逐张翻，再打开另一个工具看参数、裁切、转换格式——<strong>每一步都很简单，连起来却不断打断判断。</strong>",
      "prob_p2": "FramerSnap 把这些高频动作放回一条连续的视觉路径。你只需要专注于一件事：<strong>哪一张，值得留下。</strong>",

      // Flow
      "flow_h2": "一条没有岔路的<br>照片工作流。",
      "flow_p": "从第一次看见，到最终发出，操作始终围绕当前这组照片展开。少切换一次，就多保留一点判断的连贯。",
      "flow1_n": "01 / 看见<i></i>",
      "flow1_h3": "打开任意一张",
      "flow1_p": "自动读取同一文件夹。JPG、HEIC、WebP、PNG、TIFF、RAW 等常见格式直接预览。",
      "flow2_n": "02 / 判断<i></i>",
      "flow2_h3": "整组连贯浏览",
      "flow2_p": "胶片带、缩放与拍摄信息留在眼前，不再为了确认细节离开当前画面。",
      "flow3_n": "03 / 选定<i></i>",
      "flow3_h3": "边看边收进精选",
      "flow3_p": "单选、连选、跨图多选都顺手。喜欢的照片一键归拢，挑图不再变成文件管理。",
      "flow4_n": "04 / 发出<i></i>",
      "flow4_h3": "按需要完成交付",
      "flow4_p": "直接 AirDrop，或批量转换与压缩；需要展示时，再补上干净的艺术相框。",

      // Stories
      "story_label": "The details",
      "story_h2": "动作很轻，<br>判断很快。",
      "story_desc": "不是把专业软件缩小，而是把看图时真正需要的能力，放到最顺手的位置。",
      "story1_idx": "01 / PICK",
      "story1_h3": "不用退出画面，<br>就能完成挑片。",
      "story1_p": "底部胶片带不是装饰，而是整条工作流的主轴。Cmd 点选、Shift 连选，喜欢的照片直接移入精选；你的目光始终留在作品上。",
      "story1_t1": "灵活多选",
      "story1_t2": "一键精选",
      "story1_t3": "快捷键支持",
      "story2_idx": "02 / REFINE",
      "story2_h3": "辅助判断，<br>而不是接管创作。",
      "story2_p": "标准比例、位置参考和完整 EXIF 信息随时展开。你可以快速确认构图与拍摄参数，再决定是否值得进入下一步。",
      "story2_t1": "标准画幅",
      "story2_t2": "位置辅助",
      "story2_t3": "EXIF 信息",
      "story3_idx": "03 / PRESENT",
      "story3_h3": "让作品完成，<br>不只是导出。",
      "story3_p": "一键生成带有留白、阴影与拍摄参数的艺术相框。分享出去的不是一张裸露的文件，而是一幅已经准备好被观看的作品。",
      "story3_t1": "艺术相框",
      "story3_t2": "相机与镜头参数",
      "story3_t3": "实时预览",
      "zoom_caption": "点击查看完整界面",

      // Gallery / Proof
      "gallery_label": "Complete product tour",
      "gallery_h2": "每一个功能，<br>都完整呈现。",
      "gallery_badge": "12 SCREENS · 8 CAPABILITIES",
      "gallery_desc": "这里不是概念示意，而是 FramerSnap 当前产品界面的完整切片。每张截图都可以点击放大，逐一查看真实操作与细节。",
      "g1_badge": "01 / BROWSE",
      "g1_h3": "打开即浏览，常用格式直接展示",
      "g1_p": "从单张照片进入整组影像；沉浸式画面与底部胶片带始终保持同步。",
      "g1_cap1": "沉浸浏览与胶片带",
      "g1_cap2": "常用格式快速展示",
      "g2_badge": "02 / INSPECT",
      "g2_h3": "拍摄信息，随时展开",
      "g2_p": "文件属性与 EXIF 参数留在当前画面，确认细节不必切换应用。",
      "g2_cap": "快速信息查看",
      "g3_badge": "03 / COMPOSE",
      "g3_h3": "标准比例辅助二次构图",
      "g3_p": "常用画幅比例直接覆盖在照片上，让构图判断更快落位。",
      "g3_cap": "标准比例辅助",
      "g4_badge": "04 / POSITION",
      "g4_h3": "快速定位图片位置",
      "g4_p": "围绕当前照片完成定位与文件操作，不必回到 Finder 重新搜索。",
      "g4_cap": "快速定位位置",
      "g5_badge": "05 / SHARE",
      "g5_h3": "多选之后，直接 AirDrop",
      "g5_p": "分享紧接在挑选之后，身边的人无需等待你重复导出与选择。",
      "g5_cap": "多选与 AirDrop",
      "g6_badge": "06 / SELECT",
      "g6_h3": "边看边挑，把喜欢的留在精选",
      "g6_p": "从选择方式到精选结果，挑片过程始终围绕底部胶片带连续发生。",
      "g6_cap1": "多选与精选策略",
      "g6_cap2": "胶片带快速挑图",
      "g7_badge": "07 / EXPORT",
      "g7_h3": "批量转换与压缩，一次收尾",
      "g7_p": "统一处理选中照片的格式、尺寸和输出目录，交付状态清楚可见。",
      "g7_cap": "批量格式转换与压缩",
      "g8_badge": "08 / FRAME",
      "g8_h3": "从参数到成片，大师相框完整过程",
      "g8_p": "预设选择、视觉参数与最终效果同时呈现，让照片以更完整的方式被观看。",
      "g8_cap1": "相框实时编辑",
      "g8_cap2": "相框预设效果",
      "g8_cap3": "作品最终呈现",

      // Toolkit
      "tool_label": "More in the flow",
      "tool_h2": "该有的，都在手边。<br>不该有的，不来打扰。",
      "tool_desc": "每一项能力都服务于同一件事：更快看清、更快选定、更体面地交付。",
      "t1_h3": "AirDrop 就在选择之后",
      "t1_p": "多选照片后直接发给身边的人，不必先导出到另一个目录，再重新选择一遍。",
      "t2_h3": "信息随时可查",
      "t2_p": "文件信息和拍摄参数就地展开，确认细节不打断浏览。",
      "t3_h3": "批量转换格式",
      "t3_p": "HEIC、WebP、PNG、TIFF、RAW 等格式可统一转换为 JPG。",
      "t4_h3": "批量压缩尺寸",
      "t4_p": "交付前集中处理文件体积与尺寸，不再逐张重复操作。",
      "t5_h3": "快速定位原文件",
      "t5_p": "需要进入文件系统时，直接定位当前图片，不再凭文件名搜索。",

      // Pricing
      "price_label": "Pricing & Plans",
      "price_h2": "透明定价，随心所选",
      "price_desc": "免费版即足以应对日常看图与轻挑图；升级 Pro，解锁无拘无束的批量工作流与大师装裱。",
      "p_free_h3": "Free 基础免费版",
      "p_free_p": "¥0 <span>/ 永久免费</span>",
      "p_free_sub": "适合日常照片浏览、快速挑图与轻量参数查看。",
      "p_free_f1": "全格式沉浸式看图（包含专业 RAW）",
      "p_free_f2": "胶片带快速多选挑图与快捷移入精选",
      "p_free_f3": "完整 EXIF 拍摄参数实时查看",
      "p_free_f4": "5 款经典内置艺术相框直接导出",
      "p_free_f5": "单次 ≤ 5 张批量转换 / 压缩 / 隔空投送",
      "p_free_btn": "免费下载使用",

      "p_ann_h3": "Pro 年度订阅",
      "p_ann_p": "¥15.00 <span>/ 年</span>",
      "p_ann_sub": "低至每月仅 ¥1.25，灵活畅享全部大师特权。",
      "p_ann_f1": "包含基础免费版全部功能",
      "p_ann_f2": "<strong>解锁全部 11+ 款大师级艺术相框</strong>",
      "p_ann_f3": "<strong>无限制批量图片极速格式转换</strong>",
      "p_ann_f4": "<strong>无限制智能零反弹无损压缩</strong>",
      "p_ann_f5": "<strong>无限制批量多选相框渲染导出</strong>",
      "p_ann_f6": "无限制多选隔空投送 (AirDrop)",
      "p_ann_btn": "App 内订阅年费",

      "p_life_badge": "首发限时早鸟",
      "p_life_h3": "Pro 终身买断授权",
      "p_life_p": "¥29.90 <span>/ 一次性买断</span>",
      "p_life_sub": "一次付费，终身使用，永久尊享未来所有升级。",
      "p_life_f1": "包含 Pro 年度会员全部特权",
      "p_life_f2": "<strong>一次购买，永久授权，零后续费用</strong>",
      "p_life_f3": "支持家庭共享与多台 Mac 凭证同步",
      "p_life_f4": "未来新增大师相框与高级排版直接解锁",
      "p_life_f5": "优先技术支持与功能需求通道",
      "p_life_btn": "立即买断 Pro",
      "price_note": "* 付费交易均通过 Apple 官方 StoreKit 2 安全通道结算，受 Apple 隐私保护；年度订阅可随时在 Apple ID 设置中自主管理或取消续订。",

      // Quote & Closing
      "quote_text": "“好的看图工具，不该让人感觉自己在操作软件。<br><span>它只该让下一张照片，更快来到眼前。”</span>",
      "close_h2": "把时间留给<br><span class=\"gradient-word\">真正想留下的。</span>",
      "close_p": "FramerSnap，为 macOS 打造的轻快照片工作流。",
      "close_sysnote": "支持 Apple Silicon · macOS 14.0 及以上 · 纯本地沙盒运行",

      // Privacy Page
      "priv_meta_title": "隐私政策 (Privacy Policy) — FramerSnap",
      "priv_meta_desc": "FramerSnap 隐私政策：100% 本地离线处理，严密守护您的摄影资产与个人数据隐私。",
      "priv_badge": "Privacy Policy / 隐私政策",
      "priv_h1": "守护您的摄影隐私与资产安全",
      "priv_date": "最近更新生效日期：2026 年 9 月 20 日",
      "priv_card_h3": "零数据上传承诺 (Zero Data Collection)",
      "priv_card_p": "<strong>FramerSnap 是一款纯本地、离线优先的 macOS 原生工具。</strong> 我们不收集、不存储、不上传您的任何照片、文件名、EXIF 拍摄参数或设备信息。所有浏览、排版、压缩与格式转换 100% 在您的 Mac 芯片与本地内存中完成。",
      "priv_s1_h2": "1. 我们收集的信息 (Information We Collect)",
      "priv_s1_p": "<strong>简而言之：我们不收集任何可识别个人身份的数据。</strong>",
      "priv_s1_li1": "<strong>无云端服务器</strong>：FramerSnap 没有远程服务器或后端数据库，无法接收您的照片或操作记录。",
      "priv_s1_li2": "<strong>无第三方追踪或广告 SDK</strong>：应用内零集成 Google Analytics、Firebase、Facebook SDK 或任何数据埋点框架。",
      "priv_s1_li3": "<strong>无数据统计上传</strong>：应用不会后台上传崩溃日志或使用频率，真正做到开箱即用的离线安全。",
      "priv_s2_h2": "2. 照片与文件访问权限 (Photo & File Access)",
      "priv_s2_p": "FramerSnap 完全遵循 Apple 官方强制的 <strong>App Sandbox（应用沙盒机制）</strong>，严格保障操作系统与文件系统的隔离防护：",
      "priv_s2_li1": "<strong>用户意图驱动</strong>：应用仅在您双击打开图片、将图片拖拽进窗口或主动在访达中点选文件夹时，才由 macOS 系统授权访问当前特定目录。",
      "priv_s2_li2": "<strong>局部安全书签 (Security-Scoped Bookmarks)</strong>：若您在设置中指定了“精选移入目标目录”，系统仅在本地持久化沙盒范围书签，绝不越权访问您的其他私人文件夹。",
      "priv_s2_li3": "<strong>原文件防篡改保护</strong>：除您明确执行格式转换另存或压缩覆盖原图外，FramerSnap 默认对原片采用只读安全流。",
      "priv_s3_h2": "3. EXIF 与地理位置信息 (EXIF & Location Data)",
      "priv_s3_p": "数码照片中常包含快门、光圈、ISO、镜头型号以及 GPS 地理坐标等隐私数据：",
      "priv_s3_li1": "FramerSnap 仅在本地通过系统底层 <code>ImageIO</code> 框架读取这些信息用于 UI 渲染与相框水印排版展示。",
      "priv_s3_li2": "这些元数据绝不会被传出您的设备。在导出相框时，您可以自主勾选或取消勾选拍摄参数的展示。",
      "priv_s4_h2": "4. 应用内购买与商业化隐私 (In-App Purchases / StoreKit 2)",
      "priv_s4_p": "FramerSnap Pro 商业化体系采用 Apple 官方原生 <strong>StoreKit 2</strong> 技术构建：",
      "priv_s4_li1": "所有付费交易（年度连续订阅与终身买断）均由 Apple App Store 统一切实执行。",
      "priv_s4_li2": "我们无法访问、收集或记录您的支付密码、信用卡卡号或财务账单信息。",
      "priv_s4_li3": "本地通过 Apple 签名的 JWS 凭证加密验证您的 Pro 权益，全程无第三方支付中间商。",
      "priv_s5_h2": "5. 儿童隐私 (Children's Privacy)",
      "priv_s5_p": "由于我们的应用不收集任何个人数据，因此 FramerSnap 完全适用于所有年龄段的用户，不包含任何有害内容或针对儿童的数据画像。",
      "priv_s6_h2": "6. 政策变更与技术支持联系 (Contact & Support)",
      "priv_s6_p": "如果后续因法律合规或技术升级需要对隐私政策进行更新，我们将在本页面予以公告，并在应用更新日志中显著提示。",
      "priv_s6_contact": "如果您对本隐私政策有任何疑问、建议或合规咨询，请随时与我们取得联系：",
      "priv_s6_li1": "技术支持与隐私专员邮箱：<a href=\"mailto:jentle_vt@163.com\"><strong>jentle_vt@163.com</strong></a>",
      "priv_s6_li2": "官方网站：<a href=\"https://framersnap.com\">https://framersnap.com</a>",
      "priv_s6_li3": "响应时效：通常在 24~48 小时内为您回复解答。",

      // Terms Page
      "terms_meta_title": "服务条款与许可协议 (Terms of Service & EULA) — FramerSnap",
      "terms_meta_desc": "FramerSnap 最终用户许可协议与服务条款：订阅规则、Pro 权益范围、退订指南与免责声明。",
      "terms_badge": "Terms of Service & EULA / 许可条款",
      "terms_h1": "服务条款与最终用户许可协议",
      "terms_date": "最近更新生效日期：2026 年 9 月 20 日",
      "terms_s1_h2": "1. 协议接受与 Apple 标准 EULA (Agreement to Terms)",
      "terms_s1_p1": "欢迎使用 <strong>FramerSnap</strong>（以下简称“本软件”或“本应用”）。下载、安装或使用 FramerSnap 即表示您同意受本服务条款及 Apple 官方标准最终用户许可协议（Standard EULA）的约束。",
      "terms_s1_p2": "若您不同意相关条款，请勿安装或使用本软件。完整 Apple 标准协议请参阅：<a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\" target=\"_blank\" rel=\"noopener\">Apple Licensed Application End User License Agreement</a>。",
      "terms_s2_h2": "2. 软件功能与许可范围 (Scope of License)",
      "terms_s2_p": "我们授予您一项个人、不可转让、非排他性的有限使用许可，仅供您在拥有或控制的 macOS 设备上合法使用 FramerSnap。",
      "terms_free_title": "Free 基础免费版",
      "terms_free_desc": "包含极速沉浸式看图、胶片带挑图、EXIF 参数查看、标准比例裁切构图、5 款经典艺术相框直接导出，以及单次 ≤5 张轻量批量处理（格式转换/智能压缩/相框批量导出/AirDrop）。",
      "terms_pro_title": "Pro 专业版 (付费授权)",
      "terms_pro_desc": "解锁全部 11+ 款大师级艺术相框（包含微悬浮留白、黑金、拍立得等）、无限批量全格式转换（RAW/HEIC/WebP 转 JPG）、无限批量零反弹智能无损压缩、无限多选批量相框导出及多选隔空投送。",
      "terms_s3_h2": "3. 购买方案与自动续期订阅 (Purchases & Subscriptions)",
      "terms_s3_p": "FramerSnap 提供以下两种由 Apple App Store 官方安全支持的 Pro 购买模式：",
      "terms_s3_ann": "<strong>年度连续订阅 (Annual Subscription)</strong>：产品标识符 <code>com.framersnap.pro.annual</code>，订阅期 1 年。除非在到期前至少 24 小时关闭自动续订，否则将自动扣取下一年度费用（基准定价 ¥15.00/年）。",
      "terms_s3_life": "<strong>终身买断授权 (Lifetime Access)</strong>：产品标识符 <code>com.framersnap.pro.lifetime</code>，首发早鸟定价 ¥29.90 一次性买断，永久畅享当前及未来功能升级。",
      "terms_s4_h2": "4. 订阅管理与退订途径 (Subscription Management & Cancellation)",
      "terms_s4_p": "您可以随时自主管理或取消订阅：",
      "terms_s4_li1": "在 Mac 上打开 <strong>App Store</strong>，点击左下角个人头像，进入“账户设置”中的“订阅”列表管理。",
      "terms_s4_li2": "或前往 macOS <strong>“系统设置 -> Apple ID -> 媒体与购买项目 -> 订阅”</strong> 中随时点击取消。",
      "terms_s4_li3": "取消订阅后，您仍可在当前计费周期结束前继续享受 Pro 权益；计费周期结束后自动降级为 Free 基础版。",
      "terms_s5_h2": "5. 退款与账单结算 (Refund Policy)",
      "terms_s5_p": "由于所有交易均直接由 Apple 处理与结算，FramerSnap 团队无法直接向用户发起退款。若您需要申请退款，请依据 Apple App Store 官方政策访问：<a href=\"https://reportaproblem.apple.com/\" target=\"_blank\" rel=\"noopener\">Apple 报告问题中心 (reportaproblem.apple.com)</a> 进行申请，Apple 官方将根据相关法规与政策予以裁定。",
      "terms_s6_h2": "6. 知识产权与用户资产所有权 (Intellectual Property)",
      "terms_s6_p1": "<strong>您的照片永远属于您。</strong> FramerSnap 仅为您提供本地图形排版工具。所有由您导入、处理或排版合成的照片及其知识产权 100% 归您所有，我们不主张任何权利。",
      "terms_s6_p2": "FramerSnap 的应用界面设计、排版算法代码、品牌标识与内置艺术相框预设均受知识产权与著作权法保护，未经书面许可不得反编译、二次分发或转售。",
      "terms_s7_h2": "7. 免责声明与有限责任 (Disclaimers & Limitation of Liability)",
      "terms_s7_p": "本软件“按原样 (AS IS)”提供，我们在法律允许的最大范围内不对软件的不间断运行、无漏洞提供绝对保证。在任何情况下，我们均不对因使用或无法使用本软件导致的任何间接、偶然或继发性损失承担赔偿责任。",
      "terms_s8_h2": "8. 法律适用与联系支持 (Contact Us)",
      "terms_s8_p": "如果您对本协议有任何疑问或需要商业授权咨询，请联系我们：",
      "terms_s8_li1": "官方技术支持邮箱：<a href=\"mailto:jentle_vt@163.com\"><strong>jentle_vt@163.com</strong></a>",
      "terms_s8_li2": "响应时效：通常在 24~48 小时内为您回复解答。",

      // Support Page
      "supp_meta_title": "技术支持与帮助中心 (Support & FAQ) — FramerSnap",
      "supp_meta_desc": "FramerSnap 官方技术支持、常见问题解答 (FAQ)、系统要求与意见反馈。",
      "supp_badge": "Support & FAQ / 技术支持",
      "supp_h1": "很高兴为您解答与协助",
      "supp_sub": "无论是使用困惑、功能建议、Bug 反馈，还是商务咨询，我们都乐意倾听。",
      "supp_card_h3": "开发者直接技术支持通道",
      "supp_card_p": "官方技术支持邮箱：<strong>jentle_vt@163.com</strong>（通常 24~48 小时内处理回复）",
      "supp_btn_email": "直接发送邮件",
      "supp_faq_title": "常见问题解答 (FAQ)",
      "faq1_q": "如何将 FramerSnap 设置为 Mac 默认看图工具？",
      "faq1_sub": "只需简单的几步系统设置：",
      "faq1_step1": "在访达（Finder）中找到任意一张常见格式图片（如 <code>.jpg</code> 或 <code>.png</code>）。",
      "faq1_step2": "右键该图片，点击 <strong>“显示简介” (Get Info)</strong>。",
      "faq1_step3": "在弹出的面板中找到 <strong>“打开方式” (Open with)</strong>，选择 <strong>FramerSnap</strong>。",
      "faq1_step4": "点击下方的 <strong>“全部更改...” (Change All...)</strong> 按钮确认即可。之后双击该类型图片都将直接通过 FramerSnap 极速打开！",
      "faq2_q": "FramerSnap 支持哪些图片格式？是否支持相机 RAW？",
      "faq2_sub": "FramerSnap 原生基于 macOS 底层 CoreGraphics 与 ImageIO 构建，全面支持：",
      "faq2_li1": "<strong>日常常用格式</strong>：JPG / JPEG、PNG、WebP、HEIC / HEIF、TIFF、GIF、BMP。",
      "faq2_li2": "<strong>专业相机 RAW 格式</strong>：全面兼容 Apple RAW 引擎所支持的 Canon (CR2/CR3)、Nikon (NEF)、Sony (ARW)、Fujifilm (RAF)、Adobe DNG 等。",
      "faq3_q": "为什么经过智能压缩后，图片体积保证不会反向变大？",
      "faq3_p": "很多二次压缩算法在遇到网络上已经被高度优化的 JPG 时，会因高频 DCT 重新量化导致体积反而膨胀。FramerSnap 独创了<strong>“零反弹自适应降档压缩机制”</strong>：系统会在编码后严格校验输出字节与原图大小；若体积未见缩减，会自动拦截并安全保留原图，杜绝任何反向膨胀。",
      "faq4_q": "更换了新 Mac 电脑，如何恢复已购买的 Pro 会员？",
      "faq4_sub": "只要您在新 Mac 上登录的是购买时相同的 Apple ID：",
      "faq4_step1": "在新 Mac 打开 FramerSnap。",
      "faq4_step2": "点击工具栏或相框面板右上角的 <strong>“Pro” 徽章</strong> 打开购买弹窗。",
      "faq4_step3": "点击弹窗底部的 <strong>“恢复购买” (Restore Purchases)</strong>。",
      "faq4_step4": "系统将自动通过 StoreKit 2 与 Apple 验证您的授权凭证，瞬间解锁全部 Pro 权益。",
      "faq5_q": "如何取消自动续期的年度订阅？",
      "faq5_sub": "订阅完全由 Apple ID 统一管理，您可以随时自主取消：",
      "faq5_li1": "打开 Mac 的 <strong>“系统设置” -> 点击顶部的个人 Apple ID -> “媒体与购买项目” -> 点击“订阅”管理</strong>。",
      "faq5_li2": "或者直接打开 <strong>App Store</strong>，点击左下角头像 -> “账户设置” -> 在“订阅”一栏点击管理并取消续订。",
      "faq6_q": "我的摄影作品会被上传到云端服务器吗？",
      "faq6_p": "<strong>绝对不会。</strong> FramerSnap 是一款 100% 纯本地离线运行的工具，零云端中转服务器，零数据采集 SDK。所有图片像素解码、相框排版渲染、智能压缩与格式转换全都在您的 Mac 本机完成，您可以随时断开网络运行验证。",
      "supp_sys_title": "系统要求与运行环境",
      "supp_sys_os": "操作系统",
      "supp_sys_os_val": "macOS 14.0 (Sonoma) 及以上",
      "supp_sys_arch": "芯片架构",
      "supp_sys_arch_val": "Apple Silicon (M系列) & Intel",
      "supp_sys_sec": "安全机制",
      "supp_sys_sec_val": "App Sandbox 原生沙盒保护",
      "supp_help_title": "需要进一步协助？",
      "supp_help_p": "如需反馈 Bug，建议在邮件中附带您的 <strong>macOS 系统版本</strong>、<strong>Mac 芯片型号</strong> 及问题截图，我们将全力为您排查与优化：",
      "supp_contact_mail": "📫 联系邮箱：<a href=\"mailto:jentle_vt@163.com\"><strong>jentle_vt@163.com</strong></a>"
    },

    en: {
      // Common & Navigation
      "doc_title": "FramerSnap — From Seeing to Selecting, in One Seamless Flow | Native Mac Photo Darkroom",
      "doc_desc": "A lightweight photo workflow crafted for macOS. Open any image to browse the entire folder. Immersive culling, smart lossless compression, batch conversion, and artist frames. 100% on-device & private.",
      "nav_flow": "Workflow",
      "nav_details": "Features",
      "nav_gallery": "Gallery",
      "nav_pricing": "Pricing",
      "nav_support": "Support",
      "nav_download": "Download for Mac",
      "nav_home": "Home",
      "lang_label": "简体中文",
      "back_home": "← Back to Home",
      "footer_rights": "© 2026 FramerSnap. All rights reserved.",
      "footer_privacy": "Privacy Policy",
      "footer_terms": "Terms of Service (EULA)",
      "footer_support": "Support & FAQ",

      // Hero
      "hero_eyebrow": "Not Just a Photo Viewer",
      "hero_title": "From Seeing, to Selecting.<br><span class=\"gradient-word\">In One Seamless Flow.</span>",
      "hero_lede": "Open a single photo to instantly browse the entire folder. <strong>View, cull, fine-tune, and deliver</strong>—no more endless juggling between Finder, Preview, and bloated editors.",
      "hero_explore": "See How It Works ↓",
      "hero_sysnote": "Native for Apple Silicon & Intel · macOS 14.0+ · 100% On-Device Privacy",

      // Stage
      "tab1_title": "Open One, Ready for All",
      "tab1_note": "No library import required. Click any photo, and all images in the folder appear instantly in the filmstrip.",
      "tab1_badge": "01 / OPEN",
      "tab1_name": "Open & Browse",

      "tab2_title": "Keep Favorites with Ease",
      "tab2_note": "Trigger quick shortcuts right on your photos. Multi-select and move to Picks without memorizing filenames or dragging files.",
      "tab2_badge": "02 / PICK",
      "tab2_name": "Pick on the Go",

      "tab3_title": "Standard Ratios, Instant Recrop",
      "tab3_note": "Switch between cinematic widescreen, 16:9, and classic vertical portrait ratios with one click. Drag to reframe effortlessly.",
      "tab3_badge": "03 / REFINE",
      "tab3_name": "Quick Framing",

      "tab4_title": "One-Click Art Framing for Complete Delivery",
      "tab4_note": "Add white margins, soft ambient shadows, and camera EXIF parameters. Turn raw files into ready-to-share artistic masterpieces.",
      "tab4_badge": "04 / FRAME",
      "tab4_name": "Master Frames",

      "tab5_title": "Done Selecting, Ready to Ship",
      "tab5_note": "Batch convert formats, smart compress file sizes, or AirDrop directly. Wrap up your delivery in one seamless step.",
      "tab5_badge": "05 / DELIVER",
      "tab5_name": "Batch Delivery",

      // Problem
      "prob_label": "Why FramerSnap",
      "prob_title": "After shooting, what truly slows you down isn't creativity. <em>It's the friction of fragmented little tasks.</em>",
      "prob_p1": "Searching files in Finder, flipping through Preview, opening other tools for EXIF info, cropping, and format conversion—<strong>each step seems small, but together they constantly shatter your creative focus.</strong>",
      "prob_p2": "FramerSnap consolidates these high-frequency actions into one continuous visual journey. You only need to focus on one single decision: <strong>Which photo deserves to stay.</strong>",

      // Flow
      "flow_h2": "A Distraction-Free<br>Photo Workflow.",
      "flow_p": "From the very first glance to final export, your operations always stay focused on the current photo set. One less app switch means one more uninterrupted judgment.",
      "flow1_n": "01 / See<i></i>",
      "flow1_h3": "Open Any Single Image",
      "flow1_p": "Automatically loads the entire folder. Instant preview for JPG, HEIC, WebP, PNG, TIFF, and RAW camera files.",
      "flow2_n": "02 / Evaluate<i></i>",
      "flow2_h3": "Fluid Folder Browsing",
      "flow2_p": "Filmstrip, smooth zooming, and shooting parameters stay in view. Never leave the canvas just to check details.",
      "flow3_n": "03 / Select<i></i>",
      "flow3_h3": "Pick While Viewing",
      "flow3_p": "Click, Shift-range, and Cmd-multiselect. Gather your best shots into Picks with a single keypress—culling is no longer file triage.",
      "flow4_n": "04 / Deliver<i></i>",
      "flow4_h3": "Deliver on Your Terms",
      "flow4_p": "AirDrop directly, or batch convert & compress in one click; wrap with elegant artist frames whenever you're ready to showcase.",

      // Stories
      "story_label": "The details",
      "story_h2": "Light Footprint,<br>Fast Decisions.",
      "story_desc": "Not shrinking a bulky desktop suite, but putting the essential tools right at your fingertips when viewing photos.",
      "story1_idx": "01 / PICK",
      "story1_h3": "Cull Without Ever<br>Leaving Your Canvas.",
      "story1_p": "The bottom filmstrip isn't an afterthought—it's the backbone of your workflow. Cmd-select, Shift-range, and instant Move to Picks keep your eyes on the work.",
      "story1_t1": "Flexible Multi-select",
      "story1_t2": "One-Key Picks",
      "story1_t3": "Keyboard Shortcuts",
      "story2_idx": "02 / REFINE",
      "story2_h3": "Aid Your Eye Without<br>Hijacking Your Art.",
      "story2_p": "Standard aspect ratios, compositional overlays, and complete EXIF metadata unfold on demand. Verify framing and camera settings instantly.",
      "story2_t1": "Standard Ratios",
      "story2_t2": "Position Guide",
      "story2_t3": "EXIF Inspector",
      "story3_idx": "03 / PRESENT",
      "story3_h3": "Finish the Piece,<br>Don't Just Export a File.",
      "story3_p": "Generate art gallery frames with clean white margins, subtle ambient shadows, and camera parameters with a single click. Share a gallery-ready artwork, not just a bare image file.",
      "story3_t1": "Artist Frames",
      "story3_t2": "Camera & Lens Info",
      "story3_t3": "Live Preview",
      "zoom_caption": "Click to zoom full screen",

      // Gallery / Proof
      "gallery_label": "Complete product tour",
      "gallery_h2": "Every Feature,<br>Authentically Showcased.",
      "gallery_badge": "12 SCREENS · 8 CAPABILITIES",
      "gallery_desc": "These aren't concept mockups—they are actual slices of FramerSnap's production UI. Click any screenshot to zoom in and inspect every detail.",
      "g1_badge": "01 / BROWSE",
      "g1_h3": "Instant Browsing & Wide Format Support",
      "g1_p": "Seamlessly transition from a single photo to the full folder; canvas and filmstrip remain in lockstep.",
      "g1_cap1": "Immersive Canvas & Filmstrip",
      "g1_cap2": "Fast Format Preview",
      "g2_badge": "02 / INSPECT",
      "g2_h3": "Inspect Shooting Data at a Glance",
      "g2_p": "File properties and EXIF metadata stay anchored on screen—no app switching required.",
      "g2_cap": "Quick EXIF Inspector",
      "g3_badge": "03 / COMPOSE",
      "g3_h3": "Standard Ratios for Effortless Recomposition",
      "g3_p": "Overlay standard aspect ratios directly on the photo to make fast, decisive framing adjustments.",
      "g3_cap": "Standard Ratio Guide",
      "g4_badge": "04 / POSITION",
      "g4_h3": "Locate in Finder Instantly",
      "g4_p": "Pinpoint and manage the physical file right from the active photo without searching Finder.",
      "g4_cap": "Quick File Location",
      "g5_badge": "05 / SHARE",
      "g5_h3": "Multi-select to Instant AirDrop",
      "g5_p": "Share right after culling—nearby recipients get the photos without waiting for repetitive exports.",
      "g5_cap": "Multi-Select & AirDrop",
      "g6_badge": "06 / SELECT",
      "g6_h3": "Cull Seamlessly, Save to Picks",
      "g6_p": "From flexible selection techniques to dedicated Picks folders, culling flows around the filmstrip.",
      "g6_cap1": "Picks & Selection Strategy",
      "g6_cap2": "Filmstrip Fast Culling",
      "g7_badge": "07 / EXPORT",
      "g7_h3": "Batch Conversion & Compression in One Go",
      "g7_p": "Process format, size, and destination for all selected photos with clear progress tracking.",
      "g7_cap": "Batch Conversion & Compression",
      "g8_badge": "08 / FRAME",
      "g8_h3": "From Parameters to Masterpieces: Art Framing",
      "g8_p": "Templates, visual parameters, and the finished piece render simultaneously in real time.",
      "g8_cap1": "Frame Real-time Editor",
      "g8_cap2": "Frame Preset Showcase",
      "g8_cap3": "Final Artwork Presentation",

      // Toolkit
      "tool_label": "More in the flow",
      "tool_h2": "Everything You Need at Hand.<br>Nothing to Get in Your Way.",
      "tool_desc": "Every capability serves the same mission: see clearer, select faster, and deliver more gracefully.",
      "t1_h3": "AirDrop Follows Selection",
      "t1_p": "Beam selected photos to nearby devices immediately—no redundant exports or re-selecting.",
      "t2_h3": "Instant EXIF & Metadata",
      "t2_p": "Inspect aperture, shutter, ISO, lens, and file stats without breaking your visual flow.",
      "t3_h3": "Batch Format Conversion",
      "t3_p": "Convert HEIC, WebP, PNG, TIFF, and RAW to universally compatible JPGs in batch.",
      "t4_h3": "Smart Lossless Compression",
      "t4_p": "Downsize file weight before delivery with zero-inflation adaptive protection.",
      "t5_h3": "Reveal in Finder",
      "t5_p": "Reveal current file in Finder instantly—no manual searching in file hierarchy.",

      // Pricing
      "price_label": "Pricing & Plans",
      "price_h2": "Transparent Pricing, Pick What Fits",
      "price_desc": "The Free edition is all you need for daily browsing and light culling. Upgrade to Pro to unlock unrestricted batch power and master gallery frames.",
      "p_free_h3": "Free Edition",
      "p_free_p": "¥0 <span>/ Forever Free</span>",
      "p_free_sub": "Perfect for daily photo viewing, quick culling, and lightweight inspection.",
      "p_free_f1": "Immersive viewing for all formats including RAW",
      "p_free_f2": "Filmstrip multi-select and one-key Move to Picks",
      "p_free_f3": "Real-time EXIF & shooting metadata inspector",
      "p_free_f4": "5 classic built-in art frames with direct export",
      "p_free_f5": "Batch convert, compress & AirDrop up to 5 photos",
      "p_free_btn": "Download Free",

      "p_ann_h3": "Pro Annual Subscription",
      "p_ann_p": "¥15.00 <span>/ year</span>",
      "p_ann_sub": "Just ¥1.25/mo (~$2.99/yr), flexible access to all Pro features.",
      "p_ann_f1": "Everything in Free Edition",
      "p_ann_f2": "<strong>Unlock all 11+ master artist frames</strong>",
      "p_ann_f3": "<strong>Unlimited batch format conversion</strong>",
      "p_ann_f4": "<strong>Unlimited smart zero-inflation compression</strong>",
      "p_ann_f5": "<strong>Unlimited batch framed photo export</strong>",
      "p_ann_f6": "Unlimited multi-select AirDrop sharing",
      "p_ann_btn": "Subscribe in App",

      "p_life_badge": "Limited Early Bird",
      "p_life_h3": "Pro Lifetime Access",
      "p_life_p": "¥29.90 <span>/ One-time purchase</span>",
      "p_life_sub": "Pay once, own forever (~$4.99). All future updates included.",
      "p_life_f1": "Everything in Pro Annual",
      "p_life_f2": "<strong>One-time payment, permanent license, zero recurring fees</strong>",
      "p_life_f3": "Supports Apple Family Sharing across all your Macs",
      "p_life_f4": "All upcoming frame templates and features unlocked",
      "p_life_f5": "Priority support & feature request channel",
      "p_life_btn": "Buy Lifetime Pro",
      "price_note": "* All transactions processed securely via Apple StoreKit 2 and protected by Apple Privacy. Manage or cancel subscriptions anytime in Apple ID settings.",

      // Quote & Closing
      "quote_text": "“A great image viewer shouldn't make you feel like you're operating software.<br><span>It should simply bring the next photo into focus, effortlessly.”</span>",
      "close_h2": "Save Your Time for<br><span class=\"gradient-word\">What's Truly Worth Keeping.</span>",
      "close_p": "FramerSnap, the lightweight photo workflow handcrafted for macOS.",
      "close_sysnote": "Supports Apple Silicon & Intel · macOS 14.0+ · 100% On-Device Sandbox",

      // Privacy Page
      "priv_meta_title": "Privacy Policy — FramerSnap",
      "priv_meta_desc": "FramerSnap Privacy Policy: 100% on-device offline processing, guarding your photography assets and personal data.",
      "priv_badge": "Privacy Policy",
      "priv_h1": "Protecting Your Photographic Privacy & Assets",
      "priv_date": "Last Updated: September 20, 2026",
      "priv_card_h3": "Zero Data Collection Commitment",
      "priv_card_p": "<strong>FramerSnap is a 100% on-device, offline-first native macOS utility.</strong> We do not collect, store, or transmit any of your photos, filenames, EXIF parameters, or device information. All browsing, layout framing, compression, and format conversions execute entirely within your Mac's local memory and Apple Silicon/Intel hardware.",
      "priv_s1_h2": "1. Information We Collect",
      "priv_s1_p": "<strong>In short: We collect zero personally identifiable information.</strong>",
      "priv_s1_li1": "<strong>No Cloud Servers</strong>: FramerSnap operates without remote backend servers or databases. We cannot access your photos or logs.",
      "priv_s1_li2": "<strong>No 3rd-Party Tracking</strong>: Zero external tracking or analytics SDKs like Google Analytics, Firebase, or ad networks.",
      "priv_s1_li3": "<strong>No Telemetry Uploads</strong>: The application transmits no usage stats or telemetry, ensuring genuine out-of-the-box offline safety.",
      "priv_s2_h2": "2. Photo & File Access Permissions",
      "priv_s2_p": "FramerSnap strictly complies with Apple's mandatory <strong>App Sandbox framework</strong>, guaranteeing complete file system isolation:",
      "priv_s2_li1": "<strong>User-Intent Driven</strong>: Access is granted solely when you explicitly open an image, drag files into the window, or select a directory.",
      "priv_s2_li2": "<strong>Security-Scoped Bookmarks</strong>: Picks directory destinations are stored securely in local sandbox bookmarks with zero unauthorized traversal.",
      "priv_s2_li3": "<strong>Read-Only Default</strong>: All original photographs are accessed via safe read-only streams unless explicit export or conversion is triggered.",
      "priv_s3_h2": "3. EXIF & Location Data",
      "priv_s3_p": "Photographic files often contain sensitive shutter, aperture, ISO, lens, and GPS coordinates:",
      "priv_s3_li1": "FramerSnap extracts these parameters strictly locally via Apple's native <code>ImageIO</code> framework solely for UI inspection and frame rendering.",
      "priv_s3_li2": "This metadata never leaves your device. When exporting framed photos, you can freely toggle parameter display on or off.",
      "priv_s4_h2": "4. In-App Purchases & StoreKit 2 Privacy",
      "priv_s4_p": "FramerSnap Pro commercialization is engineered natively with Apple's <strong>StoreKit 2</strong>:",
      "priv_s4_li1": "All transactions (annual subscription and lifetime purchase) are executed directly by Apple App Store.",
      "priv_s4_li2": "We never access, collect, or store your passwords, credit cards, or financial details.",
      "priv_s4_li3": "Pro entitlements are verified cryptographically on-device via Apple JWS signatures without 3rd-party intermediaries.",
      "priv_s5_h2": "5. Children's Privacy",
      "priv_s5_p": "Because we collect zero personal data, FramerSnap is fully suitable for users of all ages with zero tracking or profiling.",
      "priv_s6_h2": "6. Policy Updates & Contact",
      "priv_s6_p": "Should our privacy practices evolve to reflect legal or technical improvements, notices will be published on this page and in release notes.",
      "priv_s6_contact": "If you have questions or inquiries regarding our privacy standards, please reach out to us:",
      "priv_s6_li1": "Privacy & Support Email: <a href=\"mailto:jentle_vt@163.com\"><strong>jentle_vt@163.com</strong></a>",
      "priv_s6_li2": "Official Website: <a href=\"https://framersnap.com\">https://framersnap.com</a>",
      "priv_s6_li3": "Response Time: Typically within 24–48 hours.",

      // Terms Page
      "terms_meta_title": "Terms of Service & EULA — FramerSnap",
      "terms_meta_desc": "FramerSnap End User License Agreement and Terms of Service: subscriptions, Pro entitlements, cancellation, and terms.",
      "terms_badge": "Terms of Service & EULA",
      "terms_h1": "Terms of Service & End User License Agreement",
      "terms_date": "Last Updated: September 20, 2026",
      "terms_s1_h2": "1. Agreement to Terms & Apple Standard EULA",
      "terms_s1_p1": "Welcome to <strong>FramerSnap</strong>. By downloading, installing, or using FramerSnap, you agree to be bound by these terms and Apple's Standard End User License Agreement (EULA).",
      "terms_s1_p2": "If you do not agree to these terms, please do not use the software. You can review Apple's Standard Agreement at: <a href=\"https://www.apple.com/legal/internet-services/itunes/dev/stdeula/\" target=\"_blank\" rel=\"noopener\">Apple Licensed Application End User License Agreement</a>.",
      "terms_s2_h2": "2. Scope of License & Product Tiers",
      "terms_s2_p": "We grant you a personal, non-exclusive, non-transferable license to use FramerSnap on macOS devices you own or control.",
      "terms_free_title": "Free Edition",
      "terms_free_desc": "Includes fast photo browsing, filmstrip culling, EXIF inspector, standard ratio cropping, 5 classic art frames, and batch operations up to 5 photos per action.",
      "terms_pro_title": "Pro Tier (Paid License)",
      "terms_pro_desc": "Unlocks all 11+ master artist frames (floating shadow, dark gold, polaroid, etc.), unlimited batch format conversion (RAW/HEIC to JPG), unlimited zero-inflation compression, and unlimited AirDrop multi-select.",
      "terms_s3_h2": "3. Purchases & Auto-Renewable Subscriptions",
      "terms_s3_p": "FramerSnap offers two official App Store purchasing tiers:",
      "terms_s3_ann": "<strong>Annual Subscription (<code>com.framersnap.pro.annual</code>)</strong>: 1-year billing cycle. Automatically renews unless canceled at least 24 hours before the end of the current period. Billed to your Apple ID.",
      "terms_s3_life": "<strong>Lifetime Access (<code>com.framersnap.pro.lifetime</code>)</strong>: Early-bird one-time payment. Permanent license covering all current and future feature upgrades with zero recurring fees.",
      "terms_s4_h2": "4. Subscription Management & Cancellation",
      "terms_s4_p": "You can manage or cancel your subscription anytime via:",
      "terms_s4_li1": "Open <strong>App Store</strong> on your Mac -> click your profile in the lower left -> manage under \"Account Settings -> Subscriptions\".",
      "terms_s4_li2": "Or navigate to macOS <strong>\"System Settings -> Apple ID -> Media & Purchases -> Subscriptions\"</strong> to cancel renewal.",
      "terms_s4_li3": "Upon cancellation, you retain Pro access until the current billing cycle expires, after which your app reverts to Free Edition.",
      "terms_s5_h2": "5. Refund Policy",
      "terms_s5_p": "All financial transactions are handled directly by Apple. To request a refund, please visit <a href=\"https://reportaproblem.apple.com/\" target=\"_blank\" rel=\"noopener\">Apple Report a Problem (reportaproblem.apple.com)</a> according to App Store policies.",
      "terms_s6_h2": "6. Intellectual Property & Your Content",
      "terms_s6_p1": "<strong>Your photos are always 100% yours.</strong> You retain full copyright and intellectual property rights over all images you view, process, or frame. FramerSnap software design and built-in presets remain our protected property.",
      "terms_s6_p2": "FramerSnap's interface design, composition algorithms, brand marks, and frame presets are protected by copyright law and may not be reverse-engineered or redistributed without permission.",
      "terms_s7_h2": "7. Disclaimers & Limitation of Liability",
      "terms_s7_p": "The software is provided \"AS IS\" without warranties of any kind. To the maximum extent permitted by law, we are not liable for incidental or consequential damages arising from software use.",
      "terms_s8_h2": "8. Contact & Customer Support",
      "terms_s8_p": "For any inquiries or commercial licensing questions, please contact our support desk:",
      "terms_s8_li1": "Official Support Email: <a href=\"mailto:jentle_vt@163.com\"><strong>jentle_vt@163.com</strong></a>",
      "terms_s8_li2": "Response Time: Typically within 24–48 hours.",

      // Support Page
      "supp_meta_title": "Support & FAQ — FramerSnap",
      "supp_meta_desc": "FramerSnap Official Support, Frequently Asked Questions (FAQ), system requirements, and direct feedback.",
      "supp_badge": "Support & FAQ",
      "supp_h1": "We're Here to Help & Listen",
      "supp_sub": "Questions, bug reports, feature ideas, or general inquiries—we'd love to hear from you.",
      "supp_card_h3": "Direct Developer Support Desk",
      "supp_card_p": "Official Support Email: <strong>jentle_vt@163.com</strong> (Typically responds within 24–48 hours)",
      "supp_btn_email": "Send Us an Email",
      "supp_faq_title": "Frequently Asked Questions (FAQ)",
      "faq1_q": "How do I set FramerSnap as my default image viewer on Mac?",
      "faq1_sub": "Just follow these quick system steps:",
      "faq1_step1": "In Finder, find any common image file (such as a <code>.jpg</code> or <code>.png</code>).",
      "faq1_step2": "Right-click the image and select <strong>\"Get Info\"</strong>.",
      "faq1_step3": "Under the <strong>\"Open with\"</strong> section, choose <strong>FramerSnap</strong>.",
      "faq1_step4": "Click the <strong>\"Change All...\"</strong> button to apply. From now on, double-clicking photos opens them instantly in FramerSnap!",
      "faq2_q": "Which file formats are supported? Does it support Camera RAW?",
      "faq2_sub": "Natively built upon macOS CoreGraphics and ImageIO frameworks, FramerSnap supports:",
      "faq2_li1": "<strong>Everyday Formats</strong>: JPG / JPEG, PNG, WebP, HEIC / HEIF, TIFF, GIF, BMP.",
      "faq2_li2": "<strong>Professional Camera RAW</strong>: Broad support for Apple RAW compatible formats, including Canon (CR2/CR3), Nikon (NEF), Sony (ARW), Fujifilm (RAF), Adobe DNG, and more.",
      "faq3_q": "Why does smart compression guarantee zero file size inflation?",
      "faq3_p": "Many tools cause file bloat when re-compressing already-optimized JPGs due to DCT re-quantization. FramerSnap features an <strong>adaptive zero-inflation guard</strong>: it strictly inspects output byte size against original files; if no reduction is achieved, it automatically cancels and preserves the original file intact.",
      "faq4_q": "How do I restore my Pro purchase on a new Mac?",
      "faq4_sub": "As long as you are signed into the same Apple ID used for purchase:",
      "faq4_step1": "Open FramerSnap on your new Mac.",
      "faq4_step2": "Click the <strong>\"Pro\" badge</strong> in the toolbar or frame panel to open the purchase sheet.",
      "faq4_step3": "Click <strong>\"Restore Purchases\"</strong> at the bottom of the sheet.",
      "faq4_step4": "The app verifies cryptographic JWS receipts with StoreKit 2 and immediately reactivates your full Pro license.",
      "faq5_q": "How can I manage or cancel my annual auto-renewable subscription?",
      "faq5_sub": "Subscriptions are managed directly by your Apple ID and can be canceled anytime:",
      "faq5_li1": "Go to macOS <strong>\"System Settings -> Apple ID -> Media & Purchases -> Subscriptions\"</strong>.",
      "faq5_li2": "Or launch <strong>App Store</strong>, click your account in the lower-left corner -> \"Account Settings -> Subscriptions\".",
      "faq6_q": "Are my photos uploaded to any remote cloud servers?",
      "faq6_p": "<strong>Never.</strong> FramerSnap is a 100% on-device, offline-first application with zero remote servers and zero telemetry SDKs. Pixel decoding, frame composition, compression, and conversions happen exclusively inside your Mac's local memory. You can run it completely offline with confidence.",
      "supp_sys_title": "System Requirements & Compatibility",
      "supp_sys_os": "Operating System",
      "supp_sys_os_val": "macOS 14.0 (Sonoma) or newer",
      "supp_sys_arch": "Architecture",
      "supp_sys_arch_val": "Apple Silicon (M-Series) & Intel",
      "supp_sys_sec": "Security Framework",
      "supp_sys_sec_val": "macOS App Sandbox Isolation",
      "supp_help_title": "Need Further Assistance?",
      "supp_help_p": "For bug reports, please include your <strong>macOS version</strong>, <strong>Mac hardware model</strong>, and screenshots in your email:",
      "supp_contact_mail": "📫 Support Email: <a href=\"mailto:jentle_vt@163.com\"><strong>jentle_vt@163.com</strong></a>"
    }
  };

  function detectLanguage() {
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang === 'zh' || urlLang === 'en') {
      try { localStorage.setItem('framersnap_lang', urlLang); } catch(e) {}
      return urlLang;
    }
    try {
      const stored = localStorage.getItem('framersnap_lang');
      if (stored === 'zh' || stored === 'en') return stored;
    } catch(e) {}

    const navLang = (navigator.language || navigator.userLanguage || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
    return navLang.startsWith('zh') ? 'zh' : 'en';
  }

  let currentLang = detectLanguage();

  function applyLanguage(lang) {
    currentLang = lang;
    try { localStorage.setItem('framersnap_lang', lang); } catch(e) {}
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');

    const dict = translations[lang] || translations.zh;

    // Document Title
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n');
      if (dict[key]) document.title = dict[key];
    } else if (dict.doc_title && !document.querySelector('meta[data-custom-title]')) {
      document.title = dict.doc_title;
    }

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const descKey = metaDesc.getAttribute('data-i18n-content');
      if (descKey && dict[descKey]) {
        metaDesc.setAttribute('content', dict[descKey]);
      } else if (!descKey && dict.doc_desc) {
        metaDesc.setAttribute('content', dict.doc_desc);
      }
    }

    // data-i18n (text content)
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if (el.tagName.toLowerCase() === 'title') return;
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // data-i18n-html (HTML markup)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    // Language toggle button text
    const toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      const labelSpan = toggleBtn.querySelector('span');
      if (labelSpan) {
        labelSpan.textContent = lang === 'zh' ? 'English' : '简体中文';
      } else {
        toggleBtn.textContent = lang === 'zh' ? '🌐 English' : '🌐 简体中文';
      }
    }

    // Active Stage Tab update if on landing page
    const activeTab = document.querySelector('.stage-tab.active');
    const floatNote = document.querySelector('.float-note');
    if (activeTab && floatNote) {
      const titleKey = activeTab.getAttribute('data-title-key');
      const noteKey = activeTab.getAttribute('data-note-key');
      if (titleKey && dict[titleKey]) {
        const b = floatNote.querySelector('b');
        if (b) b.textContent = dict[titleKey];
      }
      if (noteKey && dict[noteKey]) {
        const p = floatNote.querySelector('p');
        if (p) p.textContent = dict[noteKey];
      }
    }

    if (typeof CustomEvent === 'function' && typeof window.dispatchEvent === 'function') {
      window.dispatchEvent(new CustomEvent('framersnap_lang_changed', { detail: { lang } }));
    }
  }

  function toggleLanguage() {
    const nextLang = currentLang === 'zh' ? 'en' : 'zh';
    applyLanguage(nextLang);
  }

  window.FramoI18n = {
    getLang: () => currentLang,
    setLang: applyLanguage,
    toggle: toggleLanguage,
    translations
  };

  // Immediate language attribute set to prevent styling jumps
  document.documentElement.setAttribute('lang', currentLang === 'zh' ? 'zh-CN' : 'en');

  // DOMContentLoaded or immediate render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => applyLanguage(currentLang));
  } else {
    applyLanguage(currentLang);
  }
})();
