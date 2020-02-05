<style src="../assets/css/optimal.scss" scoped lang="scss"></style>
<style>
  .el-table .warning-row {
    background: oldlace;
  }
  .el-table .success-row {
    background: #f0f9eb;
  }
  .el-table .cell {
    text-align: center;
  }
  /*设置当前页码的样式，及鼠标移上其他页码时的样式,以及左右箭头鼠标移上的样式*/
  .el-pager li.active, .el-pager li:hover,
  .el-pagination button:hover {
    background: none !important;
    color: #D6B978 !important;
  }
  /*去掉边框*/
  .el-table__row>td{
    border: none !important;
  }
  .el-table::before {
  /*去掉最下面的那一条线*/
  height: 0px !important;
  }
  .el-table tr{
    color: #333;
    font-size: 0.875rem;
  }
  .el-pager li{
    background:none;
  }
  .el-pagination .btn-next, .el-pagination .btn-prev{
    background: none !important;
  }
  .el-input__inner{
    background: none !important;
  }
  .el-dialog, .el-pager li{
    background: none !important;
  }
</style>
<template>
  <div class="optimal">
    <pc-head @jump="jump" :index="index"></pc-head>
    <div class="content c-c-c">
      <div class="clear"></div>
      <div class="content-list c-u-d">
        <div class="pc">
          <el-table
            :data="tableData"
            style="width: 100%"
            stripe
            :header-cell-style="getRowClass"
            align="center"
            @row-click="rowClick"
          >
            <el-table-column
              prop="index"
              label="排名"
              width="100">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              prop="name"
              label="项目"
              width="100"
            >
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              prop="activity"
              label="开发代码提交活跃"
              width="150">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              prop="market"
              label="客户市场及收益已具规模"
              width="200">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              prop="transaction"
              label="上币交易所币价一致"
              width="180">
            </el-table-column>
            <el-table-column
              prop="volume"
              :formatter="formatterNull"
              label="成交量均匀"
              width="140">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              prop="kLine"
              label="K线连续"
              width="100">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              prop="community"
              label="社区活跃"
              width="100">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              label="总评"
              width="100">
              <template slot-scope="scope">
                <div  class="total">{{scope.row.total|formatterNull}}</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="phone">
          <el-table
            :data="tableData"
            style="width: 90vw"
            stripe
            :header-cell-style="getRowClass"
            align="center"
            @row-click="rowClick"
          >
            <el-table-column
              prop="index"
              label="排名">
            </el-table-column>
            <el-table-column
              prop="name"
              :formatter="formatterNull"
              label="项目">
            </el-table-column>
            <el-table-column
              :formatter="formatterNull"
              label="总评">
              <template slot-scope="scope">
                <div  class="total">{{scope.row.total|formatterNull}}</div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="page">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="length"
          layout="prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
      <div class="page2">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="length"
          layout="prev, pager, next"
          small
          :total="total">
        </el-pagination>
      </div>
    </div>
    <concat></concat>
    <pc-foot></pc-foot>
  </div>
</template>
<script>
    import pcHead from "../components/header";
    import concat from "../components/concat";
    import pcFoot from "../components/footer";
    import {list} from "../assets/js/optimal.js"

    export default {
        components: {pcHead, pcFoot,concat},
        data() {
            return {
                list: list,
                tableData: [],
                currentPage: 0,//当前页
                length: 12,//每页长度
                total: list.length,//总条目数
                index:1
            }
        },
        created() {
            this.getList(0);
        },
        filters:{
            formatterNull(val){
                if(val===''||val===null){
                    return '-'
                }else{
                    return val
                }
            }
        },
        methods: {
            getList(page) {
                this.tableData = [];
                let flag = page * this.length;
                let total = (flag + this.length)>this.total?this.total:flag + this.length;
                for (let i = flag; i < total; i++) {
                    this.tableData.push(this.list[i]);
                }
            },
            handleCurrentChange(page) {
                this.getList(page - 1);
            },
            //设置表格第一行的颜色
            getRowClass({row, column, rowIndex, columnIndex}) {
                if (rowIndex === 0) {
                    return {
                        background: '#D6B978',
                        color: '#fff',
                        fontSize: '0.875rem',
                        textAlign: 'center'
                    };
                } else {
                    return ""
                }
            },
            rowClick(row){
                this.$router.push({'path':'/optimal-info',query:{index:row.index}})
            },
            jump(type){
                switch (type) {
                    case -1:
                        this.$router.push('/');
                        break;
                    case 0:
                        this.$router.push('/');
                        break;
                    case 1:
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                    case 2 :
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                    case 3:
                        this.$router.push({path:'/',query:{type:type}});

                        break;
                    case 4 :
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                    case 5:
                        this.$router.push({path:'/',query:{type:type}});
                        break;
                }
            },
            //过滤空字符串
            formatterNull(row, col, val){
                if(val==''||val==null){
                    return '-'
                }else{
                    return val
                }
            }
        },
    }
</script>
