var tipuesearch = {"pages": [{'title': 'Home', 'text': 'week2~5 \n week6~9 \n week10~14 \n week15~1 8 \n \n', 'tags': '', 'url': 'Home.html'}, {'title': 'Weeks', 'text': '', 'tags': '', 'url': 'Weeks.html'}, {'title': 'week 2~5', 'text': '建立自己的倉儲和cad2019網站 \n 並下載子cmsimde建立新的網頁。 \n \n week 3 \n 執行編譯 Solvespace \n 編譯步驟: \n 先將 Y:\\portablegit\\bin\\sh.exe 改名為 sh_rename_for_solvespace.exe \n git version 查驗 git 版本 \n git 2.13 版本以上, 可以使用下列 git clone\xa0 --recurse-submodules 取得所有子模組資料 \n git clone --recurse-submodules https://github.com/solvespace/solvespace.git solvespace \n edit Y:\\tmp\\solvespace\\extlib\\angle\\CMakeLists.txt comment out line 713 and 714 \n #list(APPEND ANGLE_DEFINITIONS #"-DANGLE_PRELOADED_D3DCOMPILER_MODULE_NAMES={ \\"d3dcompiler_47.dll\\", \\"d3dcompiler_46.dll\\", \\"d3dcompiler_43.dll\\" }") endif() \n 需要手動進行 libpng.dll.a 的編譯, 並改名為 libpng_static.a, 並放到編譯系統的 lib 目錄中: \n cd solvespace \n cd extlib \n cd libpng \n mkdir build \n cd build \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n rename\xa0libpng.dll.a to libpng_static.a and copy to\xa0Y:\\msys64\\mingw64\\lib \n 接著回到 solvespace 原始碼目錄, 建立 build 目錄後進入 build 目錄, 執行: \n cmake .. -G "MinGW Makefiles" -DCMAKE_BUILD_TYPE=Release mingw32-make \n \n \n \n week4 \n 完成WEEK3的倉儲設定以及網站。 \n week5 \n solvespace建立模型。 \n \n 自評成績， \n \n', 'tags': '', 'url': 'week 2~5.html'}, {'title': 'week 6~9', 'text': "\n week 6 \n 建立汽車模型 \n \n 使用v-rap控制模型 \n \n \n week7 \n 網際 V-rep 模型控制 \n \n 先到Task1裡，下載V-rep 3.6.1 rev 4.7z和 web_vrep2.zip。 \n 將兩個檔案都解壓縮在自己的隨身碟tmp裡面。 \n 打開自己的start_mdecourse，輸入regedit開啟程式。 \n 將HKEY_CLASSES_ROOT內的，.py和.py_auto_le刪除。 \n 開啟web_vrep2的app.py，點Tools的Go。 \n 再點開剛剛載好的V-REP3\\V-REP_PRO_EDU > vrep.exe 。 \n 開啟後將web_vrep2的two_wheeler.ttt拖移進去。 \n 到http://127.0.0.1:5000/裡面，就可以操控了。 \n \n \n \n 與互相評分。 \n 新增啟動與停止按鈕 \n 1.進入2b Task 1的 #14 ，準備操作。 \n 2.開啟start_mdecoursr，進入web_vrep2。 \n 3.編輯templates裡面的controls.html。 \n 4.加入start 和 stop 的botton，直接複製改。 \n 5.編輯vrep_linefollower.py，if加入判斷式。 if direction == 'start': vrep.simxStartSimulation(self.clientID, vrep.simx_opmode_oneshot) if direction == 'stop': vrep.simxStopSimulation(self.clientID, vrep.simx_opmode_oneshot) \n 6.補上else: ，完成後儲存，記得語法要排好。 \n 7.開啟v-rep程式，將two_wheeler.ttt檔案拖入。 \n 8.再開啟app.py 的go進入網址localhost:5000。 \n 9.這樣子就可以進行start 以及 stop的操作了。 \n \n Solvespace 納入學號 \n 1.先到自己tmp下的solvespace\\build\\src\\CMakeFiles\\solvespace.dir。 \n 2.刪掉solvespace.cpp.obj檔案，開啟start_mdecourse。 \n 3.再到solvespace\\src找到solvespace.cpp用編輯器打開。 \n 4.Ctrl+f 搜尋GPL，把Message下面的This is SolveSpace 。 \n 5.改成This is SolveSpace is compiled by 40723210。 \n 6.進入solvespace\\build，輸入mingw32-make，等待完成。 \n 7.開啟solvespace.exe，點help > about 就完成了驗證。 \n", 'tags': '', 'url': 'week 6~9.html'}, {'title': 'Week10~14', 'text': '各組開始協同倉儲 \n Batch Command設定 \n \n', 'tags': '', 'url': 'Week10~14.html'}, {'title': 'Week15~18', 'text': '', 'tags': '', 'url': 'Week15~18.html'}, {'title': 'inventor', 'text': 'Inventor是美国AutoDesk公司推出的一款三维可视化实体模拟软件Autodesk Inventor Professional（AIP），目前已推出最新版本AIP2019。同时还推出了iphone版本，在 app store 有售。Autodesk Inventor Professional包括Autodesk Inventor三维设计软件；基于AutoCAD平台开发的二维机械制图和详图软件AutoCAD Mechanical；还加入了用于缆线和束线设计、管道设计及PCB IDF文件输入的专业功能模块，并加入了由业界领先的ANSYS技术支持的FEA功能，可以直接在Autodesk Inventor软件中进行应力分析。在此基础上，集成的数据管理软件Autodesk Vault-用于安全地管理进展中的设计数据。 \n 由于Autodesk Inventor Professional集所有这些产品于一体，因此提供了一个无风险的二维到三维转换路径，您能以自己的进度转换到三维，保护的二维图形和知识投资，并且清楚地知道自己在使用目前市场上DWG兼容性最强的平台。Autodesk Inventor Professional软件是一套全面的设计工具，用于创建和验证完整的数字样机；帮助制造商减少物理样机投入，以更快的速度将更多的创新产品推向市场。 \n Autodesk Inventor 产品系列正在改变传统的 CAD 工作流程：因为简化了复杂 三维模型 的创建，工程师即可专注于设计的功能实现。通过快速创建数字样机，并利用数字样机来验证设计的功能，工程师即可在投产前更容易发现设计中的错误。Inventor 能够加速概念设计到产品制造的整个流程，并凭借着这一创新方法，连续 7 年销量居同类产品之首。\n Autodesk Inventor Professional能够帮助用户充分利用原有的 AutoCAD 技能和 DWG 设计数据，从而体验数字样机带来的种种优势。 \n Autodesk Inventor Professional集成了业界领先的二维和三维设计功能。无需使用 数据转换器 ，利用DWG TrueConvert 就能直接读写 DWG 文件，同时还能保持与 三维模型 的关联性。 \n 借助 Autodesk Inventor Professional，用户可以轻松访问原有的二维信息，重复利用宝贵的设计数据。此外，由于用户可以将 Inventor 的工程图保存为 DWG 文件，因此他们可以将从数字样机中获得的分析结果与那些使用 AutoCAD 软件的合作伙伴及供应商共享。从三维零件和装配设计中生成的视图，如示意图和工厂布置图等，也可以与 AutoCAD 数据相集成。用户可以通过插入新的三维设计视图来更新原有的二维工程图，以降低升级现有设备的成本。 \n （新增功能）模板同步 \n 在 Inventor 中打开 DWG 文件，然后根据 DWG 文件中的 AutoCAD 样式自动创建图层和尺寸标注以及文本样式，从而减少根据客户的绘图标准创建工程图的时间。 \n （增强功能）易用性 \n 使AutoCAD用户快速熟练掌握三维设计工作流程 ，减少相关培训。利用带有可识别图标、AutoCAD兼容快捷键、光标提示以及撤销命令的熟悉设计环境，简化从AutoCAD软件向Inventor的过渡。用户简档功能提供面向 AutoCAD和Inventor专家的即插即用的简档，使用户可以按照自己的工作习惯配置Inventor。此外，用户可以将配置导出为XML文件，然后将其配置传输到另一台电脑上。 \n DWG 保存 \n 可将三维设计的结果表达保存为 DWG 格式，简化依赖 DWG 技术的供应商与合作伙伴之间的沟通。这样的DWG文件能在AutoCAD中以完全相同的效果进行查看、测量和打印，同时完全保持与原模型的关联更新。 \n DWG 的直接打开 \n 无需安装或学习AutoCAD，AutoCAD 工程图也可以直接在 Inventor 中打开，使用熟悉的Inventor 命令进行查看、打印和测量 。使用“复制”和“粘贴”命令将现有的二维设计 数据集成 到三维设计工作流程中。 \n 从 Inventor 视图生成 AutoCAD 图块 \n 降低那些从二维设计升级到三维设计项目的使用成本。该功能可以从Inventor 视图生成 AutoCAD 图块，因而用户可以使用 Inventor 重新设计子装配，然后将新工程图直接集成到原有视图中。 \n Inventor 与 AutoCAD Mechanical 的合作 \n 支持关联的二维和三维合作，加速产品上市时间、减少错误。利用这种合作特性，AutoCAD Mechanical 可以打开 Inventor 零件或装配，并关联创建AutoCAD Mechanical 的相关零件或装配工程图。当Inventor 中的设计发生变更时，AutoCAD Mechanica l工程图会随之更新。 \n \n \n', 'tags': '', 'url': 'inventor.html'}, {'title': '零件设计', 'text': '编辑 \n Inventor 可以帮助设计人员更为轻松地重复利用已有的设计数据，生动地表现设计意图。借助其中全面关联的模型，零件设计中的任何变化都可以反映到装配模型和工程图文件中。由此，设计人员的工作效率将得到显著提高。 \n Inventor 可以使经常使用的自定义特征和零件的设计标准化和系列化，从而提高客户的生产效率。利用 Inventor 中的 iPart技术，设计公司可以轻松设置智能零件库，以确保始终以同种方式创建常用零件。 \n （增强功能）草图绘制 \n 在创建零件和装配模型之前对不同的结构方案进行评估。通过使用 Inventor 的草图环境，可以像使用二维布局一样快速表达设计构思。使用几何约束功能与草图 修改工具 ，并结合颜色和线型的设置，更好地表达设计构思。 \n （增强功能）高级外形表达 \n 组合使用实体和曲面，能创建各种复杂的几何图形。Inventor 使用户可以精确控制形状特性，如相切和连续。高级建模工具包括“放样到点”、“边界嵌片”、“沿路径和引导曲面扫掠”、“面积放样”、“中心线放样”、“G2 连续 圆角 ”、“全圆角”和“面圆角”。 \n 曲面质量分析 \n 创建高品质曲面模型，然后检查设计模型是否符合设计要求，以避免在加工阶段出现高成本的变更。斑马纹 和 高斯 分析工具可以实现曲面相切、连续性及曲率的检查。 \n 拔模斜度和截面分析 \n 截面分析，用于显示截面上的壁厚，以假色彩表达最小和最大厚度的情况，并显示截面末端的惯性矩。拔模分析也是用假色彩表达拔模斜度，拔模斜度是以工作轴、工作面或平面定义的拔模方向为基础的。 \n 从AliasStudio中导入数据 \n 导入并使用 Autodesk AliasStudio? 软件中的外形设计数据，缩短完成三维产品设计所耗费的时间。这是用这两款产品自带的 DWG 导入和导出功能，将 AliasStudio 中的曲线和曲面数据导入 Inventor 中。 \n 灌注工具 \n 基于 Inventor的、或其他软件导入的曲面，使用灌注工具添加材料以形成零件实体。从闭合曲面集构造三维零件几何图元，并将导入的曲面 数据集成 到模型中。 \n 放样工具 \n 主要用于曲面造型，需要2个截面和1个或多个截面的造型。 \n 如：吹风机、电钻等。 \n \n \n', 'tags': '', 'url': '零件设计.html'}, {'title': '钣金设计', 'text': '编辑 \n Autodesk Inventor 能够帮助用户简化复杂钣金零件的设计。 \n Inventor 中的数字样机结合了加工信息（如冲压工具参数和自定义的折弯表）、精确的钣金折弯模型以及展开模型编辑环境。在展开模型编辑环境中，制造工程师可以对钣金展开模型进行细微的改动。因此能够帮助用户提高设计钣金零件的效率。 \n （增强功能）钣金凸缘 \n 在三维环境中快速设计符合特定加工流程和车间加工能力的钣金零件。使用链选边，只需一步就可以创建多个凸缘。丰富的展开选项和自动斜接功能也减少了定义钣金原型所耗费的时间。 \n （增强功能）钣金样式 \n 生成可精确反映企业加工能力的展开参数。通过样式来控制钣金展开模型，以定义材料厚度、折弯线和释压角等。线性展开方式及自定义的折弯表均可用于控制展开的几何图元。 \n 展开模式功能 \n 关联的展开模式编辑功能，支持一定程度的修饰操作，例如修改释压方式，以匹配制造要求。 \n 冲压工具库 \n 用户可以定义自己的钣金冲压工具库，以实现冲压工具的标准化，并降低 数控 （CNC）模具成本。借助制造参数表达方法，如冲压 ID、冲压深度和用作替代性冲压表示方法的草图，基于表格的冲压方法表达，使用户可以定义冲压系列以及相同冲压的几种典型尺寸。 \n （新增功能）钣金紧固件 \n 在钣金设计中快速插入专用的钣金紧固件。全系列的 PEM? 紧固件均可以在资源中心找到。 \n DXF 输出 \n 由于无需花费时间整理用于 CNC 加工的 DXF? 文件，编程时间大大缩短。面向钣金的 DXF/DWG 输出功能使用户可以控制预处理选项和后处理选项，如 DXF/DWG \xa0 文件版本 、图层映射、用于简化样条的用户自定义弦长，以及从外部XML文件导入的用户自定义配置。 \n （增强功能）钣金工程图 \n 快速创建精确的钣金工程图，支持钣金制造工作。冲压注释、冲压表和折弯表显示来自 三维模型 的冲压和折弯数据。用户可以在展开工程图中加入冲压注释、冲压表和折弯表来详细描述，并利用图纸样式选择所显示的折弯方向。 \n \n \n', 'tags': '', 'url': '钣金设计.html'}, {'title': '装配设计', 'text': '编辑 \n Inventor将设计加速器与易于使用的装配工具相结合，使用户可以确保装配设计中每一个零部件的安装正确。 \n 精确地验证干涉情况和各种属性，以便一次性创建高质量的产品。Inventor提供的强大工具可有效控制和管理大型装配设计中创建的数据，因此用户只需专心工作在所关心的部分零部件上。 \n', 'tags': '', 'url': '装配设计.html'}, {'title': 'BOOK', 'text': '', 'tags': '', 'url': 'BOOK.html'}, {'title': 'Space Modeling with SolidWorks and NX', 'text': '\n', 'tags': '', 'url': 'Space Modeling with SolidWorks and NX.html'}, {'title': 'NX-12-for-Engineering-Design', 'text': '第6章-裝配建模 \n 每天，我們都會看到許多將組件組裝成一個模型的示例，例如自行車，汽車和計算機。所有這些產品都是通過設計和製造單個零件，然後將它們裝配在一起而創建的。創建它們的設計師必須仔細計劃每個零件，以便它們都能完美地配合在一起以執行所需的功能。在本章中，您將學習在裝配體建模中使用的兩種方法。我們將以葉輪組件為例進行組件建模。該程序集的某些部分已經在較早的章節中進行了建模。 NX 12 Assembly是包含各個零件的零件文件。它們以這樣的方式添加到零件文件中，即零件實際上位於裝配體中並鏈接到原始零件。這樣就無需為計算機中的各個部件創建單獨的存儲空間。所有零件都是可選的，可在設計過程中用於信息和配合，以確保設計者想要的完美配合。下圖顯示瞭如何添加零部件以構成裝配體。 \n \n 6.1術語裝配 \n 裝配是指向零件和/或子裝配的指針的集合。裝配體是零件文件，其中包含零部件對象。零部件對象零部件對像是指向包含零部件幾何形狀的零件文件的非幾何指針。零部件對象存儲信息，例如圖層，顏色，參考集，零部件相對於文件系統中零部件的裝配體和路徑的位置數據。 NX 12用於工程設計123密蘇里科技大學零件零件是零件的一個零件文件，該零件在裝配體中指向。實際的幾何圖形存儲在零部件中，並且被引用，而不是由裝配體複製。零部件的出現零部件的出現是指向零部件文件中幾何圖形的指針。使用零部件實例來創建一個或多個零部件參考，而無需創建其他幾何體。參考集參考集是零部件或子裝配中的對象的命名集合，可用於簡化高層裝配中零部件的表示。 \n \n 6.2組裝方法創建任何組裝模型的基本方法有兩種。  \n •自上而下的方法 \n •自下而上的方法 \n 6.2.1自上而下的方法 \n 在此方法中，首先創建裝配零件文件，然後在該文件中創建零部件。然後對各個零件進行建模。這種類型的建模在新設計中很有用。 \n \n 6.2.2自下而上的方法 \n 首先以傳統方式創建零部件，然後將其添加到裝配零件文件中。當零件文件已經存在於先前的設計中並且可以重複使用時，此技術特別有用。 \n 6.2.3混合和匹配 \n 可以在必要時將這兩種方法結合使用，以增加裝配設計需求的靈活性。 6.3裝配和約束導航器裝配導航器和約束導航器位於屏幕左側資源欄中零件導航器的頂部。這些導航器向您顯示構成裝配體的各種內容，包括零件層次結構，零件名稱，有關零件的信息，例如零件是否為只讀，對像數以及約束狀態。 \n  6.4匹配約束 \n 將零部件對象添加到裝配零件文件後，每個零部件對像都將與現有對象配對。通過在裝配的零部件上分配配合條件，可以在這些零部件之間建立位置關係或約束。這些關係稱為配合約束。配合條件由一個或多個配合約束組成。有不同的配合約束，如下所述： \n 觸摸/對齊：選擇進行對齊的平面對象將是共面的，但是平面的法線將指向相同的方向。圓柱對象的中心線將彼此對齊。 \n 同心：約束兩個分量的圓形或橢圓形邊緣，以使中心重合，並且邊緣的平面共面。 \n 距離：這將在兩個對象之間建立一個+/-距離（偏移）值。 \n 平行：所選對象將彼此平行。 \n 垂直：所選對象將彼此垂直。 \n 鍵合：創建焊接並將零件焊接在一起以作為單個對象移動。 \n 居中：對象將在其他對象之間居中，即沿槽定位圓柱並將圓柱在槽中居中。 \n 角度：這將在要組裝的零部件上選擇的兩個對象實體之間固定一個恆定的角度 \n 6.5示例 \n 我們將組裝葉輪組件對象。您已經在前面的章節中對所有組件進行了建模。現在，我們必須將它們插入到組裝環境中，並應用約束以使它們相對於彼此定位。組裝完成後，我們可以創建分解圖並準備工程圖。在開始裝配建模之前，請在Hexabolt的葉輪下部殼體和葉輪上部殼體的每一側上分別製造三個通孔（每個殼體總共6個孔）。孔的直徑應為0.25，其位置應與下圖相似。確保下部和上部機殼在相同的位置上打孔，以便在組裝時匹配。 \n \n 6.5.1開始裝配 \n ➢創建新文件 \n ➢在“模型”選項卡下選擇“裝配” \n ➢將單位設置為英寸 \n ➢將其命名為Impeller_assembly.prt \n \n 或者，如果您在建模應用程序中並想開始組裝，則 \n ➢在“應用程序”選項卡中打開“組裝”選項，然後會出現一個新的“組裝”選項卡 \n 0 \n ➢單擊文件→程序集，如下所示 \n 0 \n 在“組件”選項中， \n •“添加”選項將添加其零件文件已創建的新組件對象。  \n •“新建”使您可以在使用自頂向下的裝配方法時在裝配文件中創建新的零部件幾何。裝配約束允許您創建裝配約束，而“移動零部件”則允許您將零部件重新放置在裝配中所需的位置。 \n 0 \n 6.5.2添加組件和約束 \n ➢選擇添加將彈出右側所示的對話框。您可以從現有文件中選擇零件文件（應該已經在“已加載零件”選項卡中顯示），也可以使用對話框中的“打開文件”選項來加載零件文件。這會將選定的零件文件加載到“加載的零件”對話框中。  \n ➢單擊“打開”圖標，然後選擇文件Impeller_upper-casing.prt。 \n ➢在“零件名稱”對話框中單擊“確定”。然後，我們需要設置一個位置來放置第一個零部件的坐標系。在“位置”組框中，保留“裝配位置”的默認“捕捉”選項。 \n  ➢單擊選擇對象現在，您應該能夠以透明模式查看零件，如右側圖所示。 \n  ➢單擊“點對話框”圖標並創建[0，0，0]的坐標。 \n ➢單擊“確定”退出“點對話框”。注意：可以隨意使用“循環方向”選項來設置不同的方向。  \n ➢在“放置”組框中，我們可以定義該組件的放置位置和放置方式。在這種情況下，我們會將選項保留為默認值。 \n  ➢單擊“確定”退出“添加組件”對話框。然後，您將看到一個彈出對話框，如下圖所示。 \n 0 \n ➢單擊“是”為該零件創建一個“修復”約束。現在您所擁有的應該如下圖所示。 \n 讓我們繼續添加第二個組件，即下部外殼。 \n 0 \n ➢單擊裝配部分中的添加➢從“零件”或“打開”中選擇文件Impeller_lower-casing.prt➢在“位置”組框中，將選項更改為“絕對–工件”以將新零件放置在當前工件的絕對原點處零件 \n ➢在“放置”組框中，首先切換“移動”單選按鈕，然後將下殼體移離上殼體，以留出足夠的空間來選擇配合面。您將擁有的內容應該類似於下圖。 \n 0 \n ➢然後，切換約束單選按鈕。現在，讓我們配對上殼體和下殼體。您可以在“約束類型”框中的下拉菜單中訪問所有約束。在這裡，您可以看到不同的配合類型，這在上一節中已進行了說明。  \n ➢確保在“類型”對話框中選擇了“觸摸對齊”圖標。 \n ➢首先，選擇箭頭指向的面，如左圖所示。 \n  ➢如右圖所示，在屏幕上單擊上殼體的表面。 \n 0 \n 您可能必須調整視圖才能選擇面。選擇這兩個面後，將自動添加“觸摸對齊”約束。讓我們添加另一個“觸摸對齊”約束。  \n ➢單擊上套管的法蘭➢單擊下套管的法蘭，您可能需要通過單擊“反”來反轉約束方向 \n 0 \n \n 下殼體相對於上殼體受到約束。現在讓我們添加葉輪。  \n ➢選擇裝配體→零部件→添加以將零部件添加到當前裝配體中 \n ➢打開文件Impeller_impeller.prt \n ➢在對話框中單擊確定➢選擇絕對–裝配體位置的工作零件 \n 0 \n \n ➢切換“約束”按鈕➢單擊“約束類型”框中的“距離”圖標➢選擇兩個面，首先在葉輪上，然後在殼體上，如下圖所示 \n \n \n 0 \n ➢在“放置”組的“距離”框中，輸入3的值。 \n ➢按Enter預覽當前組件。預覽可能會顯示葉輪的方向與我們想要的方向相反。 \n 0 \n ➢要更改零件的方向或距離方向，請在“放置”窗口中，單擊“幾何要約束”框中的“循環最後約束”按鈕，如下所示 \n 0 \n ➢同樣，將六個墊圈和六個六角螺母分別向下移動至-30和-35。這是裝配體的分解圖。您可以旋轉並查看其外觀。 \n 0 \n 如果要返回原始未爆炸視圖，請單擊功能區中的爆炸視圖→從下拉菜單中選擇（不爆炸），如下所示 \n 0 \n 6.6.3千斤頂千斤 \n 頂螺釘是一種通過轉動導螺桿來操作的千斤頂。在本練習中，將要求您建模，組裝和準備零件圖紙。所有尺寸均應以毫米為單位。為每個組件創建單獨的草稿。起草最終裝配並製作表格，列出各個零部件。大會草案應有分解圖。 \n 0 \n 第7章-自由曲面建模在本章中，您將學習如何在NX 12中創建自由曲面。至此，您已經學習了使用“表單特徵”或“草圖繪製”創建模型的不同方法。自由曲面建模涉及出於美學或功能目的，以曲面形式創建模型，例如車身和渦輪葉片。下面顯示了一些自由格式的功能。 \n 0 \n 要創建Freeform Feature，首先需要一組點，曲線，圖紙或實體的邊緣，圖紙或實體的面或其他對象。以下各節介紹了可用於使用自由格式功能創建模型的一些方法。 7.1概述在NX 12中，“自由格式功能”選項位於菜單→插入→曲面/網格曲面/掃掠/法蘭曲面和菜單→編輯→曲面的不同位置，以進行更高級的操作。您可以通過多種方式從現有特徵（如點，邊，曲線等）中創建自由形式特徵。以下部分討論了一些常用功能。 7.1.1從點創建自由形狀特徵如果要構造或預先存在的數據的幾何僅包括點，則可以嘗試使用以下三個選項之一從給定點構建曲面。 \n 0 \n 7.1.2通過截面字符串創建自由形式的特徵如果構造幾何包含連接對象（曲線和邊）的字符串，則可以使用以下兩個選項之一來創建自由形式的曲面。  \n ➢從菜單中，單擊插入→網格表面直紋：如果您有兩個大致平行的字符串。通過曲線：如果三個或更多字符串大致平行。如果構造幾何圖形包含兩個或多個彼此大致平行的字符串（曲線，面，邊）以及一個或多個與第一組曲線（引導線）大致垂直的截面字符串，則可以嘗試使用其中一個以下這些選項可構建自由曲面。 \n 7.2自由格式特徵建模讓我們來進行一些自由結構建模的練習，其中包括結構化點，點雲，曲線和麵。結構化點是一組點的已定義行和列。點雲具有形成雲的一組分散點。 \n 7.2.1使用點建模➢打開文件freeform_thrupoints.prt➢右鍵單擊工具欄，確保選中了“曲面工具欄”。您將看到七行點 \n 0 \n 點的第一行將突出顯示。 ➢重複相同的步驟選擇前四行點。之後，將彈出一個窗口，詢問是否指定了所有點或是否要指定另一行。 ➢選擇“指定另一行，直到指定了所有行”。➢當指定了所有行後，選擇“指定所有點”➢單擊“通過點”窗口中的“取消”，您將看到如下所示的曲面。 \n 0 \n 7.2.2使用點雲建模➢打開名為freeform_cloud.prt的文件。點云如下所示。 \n 0 \n ➢選擇“插入”→“曲面”→“擬合曲面”，或者 \n ➢單擊“曲面”工具欄上的此圖標，將出現以下對話框。 \n  ➢單擊點雲，選擇屏幕上的所有點。  \n ➢在“適合方向”下拉菜單中，選擇“最適合”。這使點雲坐標係與原始系統匹配。 \n ➢將U和V度的默認值更改為3 \n ➢單擊“確定”。最終曲面將如下所示 \n 0 \n 7.2.3使用曲線建模➢打開名為freeform_thrucurves_parameter.prt的文件。曲線如下圖所示。 \n 0 \n 7.2.4使用曲線和麵建模➢打開名為freeform_thrucurves_faces.prt的文件。曲線和麵如右圖所示。 ➢選擇插入→網格表面→通過曲線➢選擇頂面的邊1➢選擇邊2並單擊MB2➢選擇邊3➢在對話框的對齊部分下，取消選中保留形狀複選框 \n 0 \n 7.3.3設計計算機鼠標對與以下所示類似的計算機鼠標進行建模（可以隨意搜索更多圖像作為參考），或者可以提出新的設計然後對其進行建模。提示一下，在不同的基準平面上創建一些邊界曲線，並使用它們創建自由曲面。 \n 0 \n 7.3.4設計運動水壺設計運動水壺，並使用NX（曲線和曲面）中的自由特徵對其建模。 \n 0 \n \n', 'tags': '', 'url': 'NX-12-for-Engineering-Design.html'}, {'title': 'cad_history', 'text': '1 引言: 通過特徵形狀和特徵的示例來展示特定知識。每個特徵形狀都有一個簡短的介紹，然後介紹該特徵在製造過程中的用途。 \n 2 技術寫意素描 : 通常通過手繪草圖來概述基本思想和概念。使用技術圖紙，符號和字符的標準，對於任何熟悉國際技術語言的人來說，這樣的草圖都變得清晰。為了避免技術系統或產品的外觀出現問題，至關重要的是要考慮到技術圖紙（即計劃）所必需的所有標準。唯一的區別在於以下事實：在計劃中，所有內容都被精確繪製（包括書寫），而草圖的準確性取決於其作者及其才華的準確性。在生活中，人才可以得到發展，但沒有工作就不能發展。但是，知識可以通過學習來獲得。日常工作是通過工作建立的，類似於適應運動。專業的設計師和工程師精通素描技術，這是有道理的。但是，通常它們的素描能力接近完美。素描使他們能夠將來自大腦形而上學部分的抽象信息作為自己和他人的文檔進行交流。還可以使用草圖，以便能夠以圖形形式快速呈現與特定問題有關的想法。草繪顯著改善了團隊成員，起草者和客戶之間的溝通。 \n \n 3 3D建模 從歷史上看，開發是逐步發展的，從簡單地使用線框模型描述對象和3D模型的表面描述到實體模型，這是描述空間中真實模型的最可靠方法 \n 4 3D建模軟件包 本書介紹了在通信方面有所不同的兩個建模者。每個用戶都有自己的目的和信息。用戶應該能夠識別其適用性以及是否在不同的使用級別上使用一個或另一個。我們應該強調，通信技術仍然是一個研究不足的領域，這意味著很難對一種方法或其他方法的優點做出可靠的判斷。 \n 5 擠壓 擠塑的例子很多，例如軋製，型材的生產或建築中使用的鋼樑，框架和桁架。擠出也常用於形成板，輪，型材和各種平面塊。 \n 6 旋轉 軸對稱零件通常是通過車削，旋轉磨削，鑽孔，銑削等製成的。在這些方法中，切削點通常圍繞一個軸旋轉。 \n 7 掃出 曲線 掃描代表一種重要的通用形式，用於定義不同橫截面的空間形狀，並沿預定曲線變化。此功能對於創建管道和其他自由形式的線性輪廓特別有用。它適用於不同的示例，例如彈簧或照明設備，證明了其普遍適用性。複雜形狀的示例顯示了在不同行業領域中的可能應用。 \n 8 製造技術與用途 沿曲線在不同橫截面上的過渡對於定義螺旋形狀（即通常為水力形狀）很重 要。在本章中，專門定義了液壓機，氣動鼓風機，進 氣歧管，低壓鼓風機等典型 的螺旋形殼體的形狀。 這些示例顯示了特殊影響的證據，連續橫截面的定義不 明確等。 \n 9 補充形狀 由倒角，邊緣融合和可擠壓表面定義的特殊細部形狀是任何細部設計的關鍵部分。對於前面各章中涉及的所有形狀，將介紹在不同的模型和技術上使用補充形狀的情況。本章包括所呈現功能的細節，這些特徵對於頂層設計，特別是對於創建非實體產品的照片非常重要。 \n 10 焊接建築 焊接產品是一種特殊的設計案例。儘管前幾章中的功能專門用於軋製，壓鑄和塑料材料的注射，但是焊接對於承重結構很重要。這就是為什麼這些特徵可以真實呈現焊接細節的原因，這些細節定義了待焊接材料的體積 \n 11 鈑金彎曲 因為由於具有高度的可重複性，並且在功能上相對便宜，因此，當今的鈑 金產品在使用方面具有明顯的優勢。除了邊緣和折疊 細節之外，鈑金產品還需 要一些重要的細節來定義展開的鈑金。在本章中，請注意在使用自動默認設置 （彎曲半徑和其他材料（彈性模 塊 E））時用戶應注意的細節。預先定義了兩種 用於定義鈑金零件的方法：（1）來自蓋子或（2）來自固體材料。   \n 12 物理模型建模和參數化 本章考慮兩種類型的動作。在第一部分中，對於構造函數而言，重要的是要由他或她自己實際確定零件的尺寸。我們介紹最簡單的尺寸標註方法和使用激光的方法。無論如何，在標註尺寸後，構造函數需要生成2D或3D草圖。這由構造函數決定 \n 13 個程序集 。它由技術報告，研究，材料規格，設置製造過程以及相應的運輸，運輸，分配，售後服務，維修和使用後產品處置的文檔組成。 \n 14 技術文檔（圖紙） 技術文檔是使用多種熟悉的技術製造的產品的工程說明中的重要組成部分。它代表了產品的所有細節的圖形和描述性表示。空間中的對像以裝配圖或普通圖的形式顯示為圖形表示，而細節在製造圖中指定。 \n 15 建模者和技術文檔 本章介紹了製作 特定細節的圖紙的能力和偏差，這些細節顯著地限定了特定建模者的質量。由 於開發階段的差異，仍然有一些 關鍵信息和消息可以使計劃符合條件，但不幸 的是它們尚未包含在標準軟件中。如果將來的發展包括將技術文檔的國際標準 納入建模人 員，那麼它不僅會簡化，而且最重要的是會提高總體技術文化。 \n \n', 'tags': '', 'url': 'cad_history.html'}, {'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules \xa0 https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數. \n \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'Develop.html'}]};