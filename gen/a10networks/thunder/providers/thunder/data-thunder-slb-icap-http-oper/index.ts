// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbIcapHttpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#id DataThunderSlbIcapHttpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#oper DataThunderSlbIcapHttpOper#oper}
  */
  readonly oper?: DataThunderSlbIcapHttpOperOper;
}
export interface DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_100 DataThunderSlbIcapHttpOper#status_100}
  */
  readonly status100?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_101 DataThunderSlbIcapHttpOper#status_101}
  */
  readonly status101?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_102 DataThunderSlbIcapHttpOper#status_102}
  */
  readonly status102?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_1xx DataThunderSlbIcapHttpOper#status_1xx}
  */
  readonly status1Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_200 DataThunderSlbIcapHttpOper#status_200}
  */
  readonly status200?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_201 DataThunderSlbIcapHttpOper#status_201}
  */
  readonly status201?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_202 DataThunderSlbIcapHttpOper#status_202}
  */
  readonly status202?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_203 DataThunderSlbIcapHttpOper#status_203}
  */
  readonly status203?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_204 DataThunderSlbIcapHttpOper#status_204}
  */
  readonly status204?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_205 DataThunderSlbIcapHttpOper#status_205}
  */
  readonly status205?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_206 DataThunderSlbIcapHttpOper#status_206}
  */
  readonly status206?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_207 DataThunderSlbIcapHttpOper#status_207}
  */
  readonly status207?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_2xx DataThunderSlbIcapHttpOper#status_2xx}
  */
  readonly status2Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_300 DataThunderSlbIcapHttpOper#status_300}
  */
  readonly status300?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_301 DataThunderSlbIcapHttpOper#status_301}
  */
  readonly status301?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_302 DataThunderSlbIcapHttpOper#status_302}
  */
  readonly status302?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_303 DataThunderSlbIcapHttpOper#status_303}
  */
  readonly status303?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_304 DataThunderSlbIcapHttpOper#status_304}
  */
  readonly status304?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_305 DataThunderSlbIcapHttpOper#status_305}
  */
  readonly status305?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_306 DataThunderSlbIcapHttpOper#status_306}
  */
  readonly status306?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_307 DataThunderSlbIcapHttpOper#status_307}
  */
  readonly status307?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_3xx DataThunderSlbIcapHttpOper#status_3xx}
  */
  readonly status3Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_400 DataThunderSlbIcapHttpOper#status_400}
  */
  readonly status400?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_401 DataThunderSlbIcapHttpOper#status_401}
  */
  readonly status401?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_402 DataThunderSlbIcapHttpOper#status_402}
  */
  readonly status402?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_403 DataThunderSlbIcapHttpOper#status_403}
  */
  readonly status403?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_404 DataThunderSlbIcapHttpOper#status_404}
  */
  readonly status404?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_405 DataThunderSlbIcapHttpOper#status_405}
  */
  readonly status405?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_406 DataThunderSlbIcapHttpOper#status_406}
  */
  readonly status406?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_407 DataThunderSlbIcapHttpOper#status_407}
  */
  readonly status407?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_408 DataThunderSlbIcapHttpOper#status_408}
  */
  readonly status408?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_409 DataThunderSlbIcapHttpOper#status_409}
  */
  readonly status409?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_410 DataThunderSlbIcapHttpOper#status_410}
  */
  readonly status410?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_411 DataThunderSlbIcapHttpOper#status_411}
  */
  readonly status411?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_412 DataThunderSlbIcapHttpOper#status_412}
  */
  readonly status412?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_413 DataThunderSlbIcapHttpOper#status_413}
  */
  readonly status413?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_414 DataThunderSlbIcapHttpOper#status_414}
  */
  readonly status414?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_415 DataThunderSlbIcapHttpOper#status_415}
  */
  readonly status415?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_416 DataThunderSlbIcapHttpOper#status_416}
  */
  readonly status416?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_417 DataThunderSlbIcapHttpOper#status_417}
  */
  readonly status417?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_418 DataThunderSlbIcapHttpOper#status_418}
  */
  readonly status418?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_422 DataThunderSlbIcapHttpOper#status_422}
  */
  readonly status422?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_423 DataThunderSlbIcapHttpOper#status_423}
  */
  readonly status423?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_424 DataThunderSlbIcapHttpOper#status_424}
  */
  readonly status424?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_425 DataThunderSlbIcapHttpOper#status_425}
  */
  readonly status425?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_426 DataThunderSlbIcapHttpOper#status_426}
  */
  readonly status426?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_449 DataThunderSlbIcapHttpOper#status_449}
  */
  readonly status449?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_450 DataThunderSlbIcapHttpOper#status_450}
  */
  readonly status450?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_4xx DataThunderSlbIcapHttpOper#status_4xx}
  */
  readonly status4Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_500 DataThunderSlbIcapHttpOper#status_500}
  */
  readonly status500?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_501 DataThunderSlbIcapHttpOper#status_501}
  */
  readonly status501?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_502 DataThunderSlbIcapHttpOper#status_502}
  */
  readonly status502?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_503 DataThunderSlbIcapHttpOper#status_503}
  */
  readonly status503?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_504 DataThunderSlbIcapHttpOper#status_504}
  */
  readonly status504?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_505 DataThunderSlbIcapHttpOper#status_505}
  */
  readonly status505?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_506 DataThunderSlbIcapHttpOper#status_506}
  */
  readonly status506?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_507 DataThunderSlbIcapHttpOper#status_507}
  */
  readonly status507?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_508 DataThunderSlbIcapHttpOper#status_508}
  */
  readonly status508?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_509 DataThunderSlbIcapHttpOper#status_509}
  */
  readonly status509?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_510 DataThunderSlbIcapHttpOper#status_510}
  */
  readonly status510?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_5xx DataThunderSlbIcapHttpOper#status_5xx}
  */
  readonly status5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#status_6xx DataThunderSlbIcapHttpOper#status_6xx}
  */
  readonly status6Xx?: number;
}

export function dataThunderSlbIcapHttpOperOperIcapHttpCpuListStructToTerraform(struct?: DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status_100: cdktf.numberToTerraform(struct!.status100),
    status_101: cdktf.numberToTerraform(struct!.status101),
    status_102: cdktf.numberToTerraform(struct!.status102),
    status_1xx: cdktf.numberToTerraform(struct!.status1Xx),
    status_200: cdktf.numberToTerraform(struct!.status200),
    status_201: cdktf.numberToTerraform(struct!.status201),
    status_202: cdktf.numberToTerraform(struct!.status202),
    status_203: cdktf.numberToTerraform(struct!.status203),
    status_204: cdktf.numberToTerraform(struct!.status204),
    status_205: cdktf.numberToTerraform(struct!.status205),
    status_206: cdktf.numberToTerraform(struct!.status206),
    status_207: cdktf.numberToTerraform(struct!.status207),
    status_2xx: cdktf.numberToTerraform(struct!.status2Xx),
    status_300: cdktf.numberToTerraform(struct!.status300),
    status_301: cdktf.numberToTerraform(struct!.status301),
    status_302: cdktf.numberToTerraform(struct!.status302),
    status_303: cdktf.numberToTerraform(struct!.status303),
    status_304: cdktf.numberToTerraform(struct!.status304),
    status_305: cdktf.numberToTerraform(struct!.status305),
    status_306: cdktf.numberToTerraform(struct!.status306),
    status_307: cdktf.numberToTerraform(struct!.status307),
    status_3xx: cdktf.numberToTerraform(struct!.status3Xx),
    status_400: cdktf.numberToTerraform(struct!.status400),
    status_401: cdktf.numberToTerraform(struct!.status401),
    status_402: cdktf.numberToTerraform(struct!.status402),
    status_403: cdktf.numberToTerraform(struct!.status403),
    status_404: cdktf.numberToTerraform(struct!.status404),
    status_405: cdktf.numberToTerraform(struct!.status405),
    status_406: cdktf.numberToTerraform(struct!.status406),
    status_407: cdktf.numberToTerraform(struct!.status407),
    status_408: cdktf.numberToTerraform(struct!.status408),
    status_409: cdktf.numberToTerraform(struct!.status409),
    status_410: cdktf.numberToTerraform(struct!.status410),
    status_411: cdktf.numberToTerraform(struct!.status411),
    status_412: cdktf.numberToTerraform(struct!.status412),
    status_413: cdktf.numberToTerraform(struct!.status413),
    status_414: cdktf.numberToTerraform(struct!.status414),
    status_415: cdktf.numberToTerraform(struct!.status415),
    status_416: cdktf.numberToTerraform(struct!.status416),
    status_417: cdktf.numberToTerraform(struct!.status417),
    status_418: cdktf.numberToTerraform(struct!.status418),
    status_422: cdktf.numberToTerraform(struct!.status422),
    status_423: cdktf.numberToTerraform(struct!.status423),
    status_424: cdktf.numberToTerraform(struct!.status424),
    status_425: cdktf.numberToTerraform(struct!.status425),
    status_426: cdktf.numberToTerraform(struct!.status426),
    status_449: cdktf.numberToTerraform(struct!.status449),
    status_450: cdktf.numberToTerraform(struct!.status450),
    status_4xx: cdktf.numberToTerraform(struct!.status4Xx),
    status_500: cdktf.numberToTerraform(struct!.status500),
    status_501: cdktf.numberToTerraform(struct!.status501),
    status_502: cdktf.numberToTerraform(struct!.status502),
    status_503: cdktf.numberToTerraform(struct!.status503),
    status_504: cdktf.numberToTerraform(struct!.status504),
    status_505: cdktf.numberToTerraform(struct!.status505),
    status_506: cdktf.numberToTerraform(struct!.status506),
    status_507: cdktf.numberToTerraform(struct!.status507),
    status_508: cdktf.numberToTerraform(struct!.status508),
    status_509: cdktf.numberToTerraform(struct!.status509),
    status_510: cdktf.numberToTerraform(struct!.status510),
    status_5xx: cdktf.numberToTerraform(struct!.status5Xx),
    status_6xx: cdktf.numberToTerraform(struct!.status6Xx),
  }
}


export function dataThunderSlbIcapHttpOperOperIcapHttpCpuListStructToHclTerraform(struct?: DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status_100: {
      value: cdktf.numberToHclTerraform(struct!.status100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_101: {
      value: cdktf.numberToHclTerraform(struct!.status101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_102: {
      value: cdktf.numberToHclTerraform(struct!.status102),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_1xx: {
      value: cdktf.numberToHclTerraform(struct!.status1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_200: {
      value: cdktf.numberToHclTerraform(struct!.status200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_201: {
      value: cdktf.numberToHclTerraform(struct!.status201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_202: {
      value: cdktf.numberToHclTerraform(struct!.status202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_203: {
      value: cdktf.numberToHclTerraform(struct!.status203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_204: {
      value: cdktf.numberToHclTerraform(struct!.status204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_205: {
      value: cdktf.numberToHclTerraform(struct!.status205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_206: {
      value: cdktf.numberToHclTerraform(struct!.status206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_207: {
      value: cdktf.numberToHclTerraform(struct!.status207),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_2xx: {
      value: cdktf.numberToHclTerraform(struct!.status2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_300: {
      value: cdktf.numberToHclTerraform(struct!.status300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_301: {
      value: cdktf.numberToHclTerraform(struct!.status301),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_302: {
      value: cdktf.numberToHclTerraform(struct!.status302),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_303: {
      value: cdktf.numberToHclTerraform(struct!.status303),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_304: {
      value: cdktf.numberToHclTerraform(struct!.status304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_305: {
      value: cdktf.numberToHclTerraform(struct!.status305),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_306: {
      value: cdktf.numberToHclTerraform(struct!.status306),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_307: {
      value: cdktf.numberToHclTerraform(struct!.status307),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_3xx: {
      value: cdktf.numberToHclTerraform(struct!.status3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_400: {
      value: cdktf.numberToHclTerraform(struct!.status400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_401: {
      value: cdktf.numberToHclTerraform(struct!.status401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_402: {
      value: cdktf.numberToHclTerraform(struct!.status402),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_403: {
      value: cdktf.numberToHclTerraform(struct!.status403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_404: {
      value: cdktf.numberToHclTerraform(struct!.status404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_405: {
      value: cdktf.numberToHclTerraform(struct!.status405),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_406: {
      value: cdktf.numberToHclTerraform(struct!.status406),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_407: {
      value: cdktf.numberToHclTerraform(struct!.status407),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_408: {
      value: cdktf.numberToHclTerraform(struct!.status408),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_409: {
      value: cdktf.numberToHclTerraform(struct!.status409),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_410: {
      value: cdktf.numberToHclTerraform(struct!.status410),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_411: {
      value: cdktf.numberToHclTerraform(struct!.status411),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_412: {
      value: cdktf.numberToHclTerraform(struct!.status412),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_413: {
      value: cdktf.numberToHclTerraform(struct!.status413),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_414: {
      value: cdktf.numberToHclTerraform(struct!.status414),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_415: {
      value: cdktf.numberToHclTerraform(struct!.status415),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_416: {
      value: cdktf.numberToHclTerraform(struct!.status416),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_417: {
      value: cdktf.numberToHclTerraform(struct!.status417),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_418: {
      value: cdktf.numberToHclTerraform(struct!.status418),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_422: {
      value: cdktf.numberToHclTerraform(struct!.status422),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_423: {
      value: cdktf.numberToHclTerraform(struct!.status423),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_424: {
      value: cdktf.numberToHclTerraform(struct!.status424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_425: {
      value: cdktf.numberToHclTerraform(struct!.status425),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_426: {
      value: cdktf.numberToHclTerraform(struct!.status426),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_449: {
      value: cdktf.numberToHclTerraform(struct!.status449),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_450: {
      value: cdktf.numberToHclTerraform(struct!.status450),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_4xx: {
      value: cdktf.numberToHclTerraform(struct!.status4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_500: {
      value: cdktf.numberToHclTerraform(struct!.status500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_501: {
      value: cdktf.numberToHclTerraform(struct!.status501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_502: {
      value: cdktf.numberToHclTerraform(struct!.status502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_503: {
      value: cdktf.numberToHclTerraform(struct!.status503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_504: {
      value: cdktf.numberToHclTerraform(struct!.status504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_505: {
      value: cdktf.numberToHclTerraform(struct!.status505),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_506: {
      value: cdktf.numberToHclTerraform(struct!.status506),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_507: {
      value: cdktf.numberToHclTerraform(struct!.status507),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_508: {
      value: cdktf.numberToHclTerraform(struct!.status508),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_509: {
      value: cdktf.numberToHclTerraform(struct!.status509),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_510: {
      value: cdktf.numberToHclTerraform(struct!.status510),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_5xx: {
      value: cdktf.numberToHclTerraform(struct!.status5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_6xx: {
      value: cdktf.numberToHclTerraform(struct!.status6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbIcapHttpOperOperIcapHttpCpuListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status100 = this._status100;
    }
    if (this._status101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status101 = this._status101;
    }
    if (this._status102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status102 = this._status102;
    }
    if (this._status1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status1Xx = this._status1Xx;
    }
    if (this._status200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status200 = this._status200;
    }
    if (this._status201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status201 = this._status201;
    }
    if (this._status202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status202 = this._status202;
    }
    if (this._status203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status203 = this._status203;
    }
    if (this._status204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status204 = this._status204;
    }
    if (this._status205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status205 = this._status205;
    }
    if (this._status206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status206 = this._status206;
    }
    if (this._status207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status207 = this._status207;
    }
    if (this._status2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status2Xx = this._status2Xx;
    }
    if (this._status300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status300 = this._status300;
    }
    if (this._status301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status301 = this._status301;
    }
    if (this._status302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status302 = this._status302;
    }
    if (this._status303 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status303 = this._status303;
    }
    if (this._status304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status304 = this._status304;
    }
    if (this._status305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status305 = this._status305;
    }
    if (this._status306 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status306 = this._status306;
    }
    if (this._status307 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status307 = this._status307;
    }
    if (this._status3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status3Xx = this._status3Xx;
    }
    if (this._status400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status400 = this._status400;
    }
    if (this._status401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status401 = this._status401;
    }
    if (this._status402 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status402 = this._status402;
    }
    if (this._status403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status403 = this._status403;
    }
    if (this._status404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status404 = this._status404;
    }
    if (this._status405 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status405 = this._status405;
    }
    if (this._status406 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status406 = this._status406;
    }
    if (this._status407 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status407 = this._status407;
    }
    if (this._status408 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status408 = this._status408;
    }
    if (this._status409 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status409 = this._status409;
    }
    if (this._status410 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status410 = this._status410;
    }
    if (this._status411 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status411 = this._status411;
    }
    if (this._status412 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status412 = this._status412;
    }
    if (this._status413 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status413 = this._status413;
    }
    if (this._status414 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status414 = this._status414;
    }
    if (this._status415 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status415 = this._status415;
    }
    if (this._status416 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status416 = this._status416;
    }
    if (this._status417 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status417 = this._status417;
    }
    if (this._status418 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status418 = this._status418;
    }
    if (this._status422 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status422 = this._status422;
    }
    if (this._status423 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status423 = this._status423;
    }
    if (this._status424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status424 = this._status424;
    }
    if (this._status425 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status425 = this._status425;
    }
    if (this._status426 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status426 = this._status426;
    }
    if (this._status449 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status449 = this._status449;
    }
    if (this._status450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status450 = this._status450;
    }
    if (this._status4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status4Xx = this._status4Xx;
    }
    if (this._status500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status500 = this._status500;
    }
    if (this._status501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status501 = this._status501;
    }
    if (this._status502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status502 = this._status502;
    }
    if (this._status503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status503 = this._status503;
    }
    if (this._status504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status504 = this._status504;
    }
    if (this._status505 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status505 = this._status505;
    }
    if (this._status506 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status506 = this._status506;
    }
    if (this._status507 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status507 = this._status507;
    }
    if (this._status508 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status508 = this._status508;
    }
    if (this._status509 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status509 = this._status509;
    }
    if (this._status510 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status510 = this._status510;
    }
    if (this._status5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status5Xx = this._status5Xx;
    }
    if (this._status6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status6Xx = this._status6Xx;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status100 = undefined;
      this._status101 = undefined;
      this._status102 = undefined;
      this._status1Xx = undefined;
      this._status200 = undefined;
      this._status201 = undefined;
      this._status202 = undefined;
      this._status203 = undefined;
      this._status204 = undefined;
      this._status205 = undefined;
      this._status206 = undefined;
      this._status207 = undefined;
      this._status2Xx = undefined;
      this._status300 = undefined;
      this._status301 = undefined;
      this._status302 = undefined;
      this._status303 = undefined;
      this._status304 = undefined;
      this._status305 = undefined;
      this._status306 = undefined;
      this._status307 = undefined;
      this._status3Xx = undefined;
      this._status400 = undefined;
      this._status401 = undefined;
      this._status402 = undefined;
      this._status403 = undefined;
      this._status404 = undefined;
      this._status405 = undefined;
      this._status406 = undefined;
      this._status407 = undefined;
      this._status408 = undefined;
      this._status409 = undefined;
      this._status410 = undefined;
      this._status411 = undefined;
      this._status412 = undefined;
      this._status413 = undefined;
      this._status414 = undefined;
      this._status415 = undefined;
      this._status416 = undefined;
      this._status417 = undefined;
      this._status418 = undefined;
      this._status422 = undefined;
      this._status423 = undefined;
      this._status424 = undefined;
      this._status425 = undefined;
      this._status426 = undefined;
      this._status449 = undefined;
      this._status450 = undefined;
      this._status4Xx = undefined;
      this._status500 = undefined;
      this._status501 = undefined;
      this._status502 = undefined;
      this._status503 = undefined;
      this._status504 = undefined;
      this._status505 = undefined;
      this._status506 = undefined;
      this._status507 = undefined;
      this._status508 = undefined;
      this._status509 = undefined;
      this._status510 = undefined;
      this._status5Xx = undefined;
      this._status6Xx = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status100 = value.status100;
      this._status101 = value.status101;
      this._status102 = value.status102;
      this._status1Xx = value.status1Xx;
      this._status200 = value.status200;
      this._status201 = value.status201;
      this._status202 = value.status202;
      this._status203 = value.status203;
      this._status204 = value.status204;
      this._status205 = value.status205;
      this._status206 = value.status206;
      this._status207 = value.status207;
      this._status2Xx = value.status2Xx;
      this._status300 = value.status300;
      this._status301 = value.status301;
      this._status302 = value.status302;
      this._status303 = value.status303;
      this._status304 = value.status304;
      this._status305 = value.status305;
      this._status306 = value.status306;
      this._status307 = value.status307;
      this._status3Xx = value.status3Xx;
      this._status400 = value.status400;
      this._status401 = value.status401;
      this._status402 = value.status402;
      this._status403 = value.status403;
      this._status404 = value.status404;
      this._status405 = value.status405;
      this._status406 = value.status406;
      this._status407 = value.status407;
      this._status408 = value.status408;
      this._status409 = value.status409;
      this._status410 = value.status410;
      this._status411 = value.status411;
      this._status412 = value.status412;
      this._status413 = value.status413;
      this._status414 = value.status414;
      this._status415 = value.status415;
      this._status416 = value.status416;
      this._status417 = value.status417;
      this._status418 = value.status418;
      this._status422 = value.status422;
      this._status423 = value.status423;
      this._status424 = value.status424;
      this._status425 = value.status425;
      this._status426 = value.status426;
      this._status449 = value.status449;
      this._status450 = value.status450;
      this._status4Xx = value.status4Xx;
      this._status500 = value.status500;
      this._status501 = value.status501;
      this._status502 = value.status502;
      this._status503 = value.status503;
      this._status504 = value.status504;
      this._status505 = value.status505;
      this._status506 = value.status506;
      this._status507 = value.status507;
      this._status508 = value.status508;
      this._status509 = value.status509;
      this._status510 = value.status510;
      this._status5Xx = value.status5Xx;
      this._status6Xx = value.status6Xx;
    }
  }

  // status_100 - computed: false, optional: true, required: false
  private _status100?: number; 
  public get status100() {
    return this.getNumberAttribute('status_100');
  }
  public set status100(value: number) {
    this._status100 = value;
  }
  public resetStatus100() {
    this._status100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status100Input() {
    return this._status100;
  }

  // status_101 - computed: false, optional: true, required: false
  private _status101?: number; 
  public get status101() {
    return this.getNumberAttribute('status_101');
  }
  public set status101(value: number) {
    this._status101 = value;
  }
  public resetStatus101() {
    this._status101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status101Input() {
    return this._status101;
  }

  // status_102 - computed: false, optional: true, required: false
  private _status102?: number; 
  public get status102() {
    return this.getNumberAttribute('status_102');
  }
  public set status102(value: number) {
    this._status102 = value;
  }
  public resetStatus102() {
    this._status102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status102Input() {
    return this._status102;
  }

  // status_1xx - computed: false, optional: true, required: false
  private _status1Xx?: number; 
  public get status1Xx() {
    return this.getNumberAttribute('status_1xx');
  }
  public set status1Xx(value: number) {
    this._status1Xx = value;
  }
  public resetStatus1Xx() {
    this._status1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status1XxInput() {
    return this._status1Xx;
  }

  // status_200 - computed: false, optional: true, required: false
  private _status200?: number; 
  public get status200() {
    return this.getNumberAttribute('status_200');
  }
  public set status200(value: number) {
    this._status200 = value;
  }
  public resetStatus200() {
    this._status200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status200Input() {
    return this._status200;
  }

  // status_201 - computed: false, optional: true, required: false
  private _status201?: number; 
  public get status201() {
    return this.getNumberAttribute('status_201');
  }
  public set status201(value: number) {
    this._status201 = value;
  }
  public resetStatus201() {
    this._status201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status201Input() {
    return this._status201;
  }

  // status_202 - computed: false, optional: true, required: false
  private _status202?: number; 
  public get status202() {
    return this.getNumberAttribute('status_202');
  }
  public set status202(value: number) {
    this._status202 = value;
  }
  public resetStatus202() {
    this._status202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status202Input() {
    return this._status202;
  }

  // status_203 - computed: false, optional: true, required: false
  private _status203?: number; 
  public get status203() {
    return this.getNumberAttribute('status_203');
  }
  public set status203(value: number) {
    this._status203 = value;
  }
  public resetStatus203() {
    this._status203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status203Input() {
    return this._status203;
  }

  // status_204 - computed: false, optional: true, required: false
  private _status204?: number; 
  public get status204() {
    return this.getNumberAttribute('status_204');
  }
  public set status204(value: number) {
    this._status204 = value;
  }
  public resetStatus204() {
    this._status204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status204Input() {
    return this._status204;
  }

  // status_205 - computed: false, optional: true, required: false
  private _status205?: number; 
  public get status205() {
    return this.getNumberAttribute('status_205');
  }
  public set status205(value: number) {
    this._status205 = value;
  }
  public resetStatus205() {
    this._status205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status205Input() {
    return this._status205;
  }

  // status_206 - computed: false, optional: true, required: false
  private _status206?: number; 
  public get status206() {
    return this.getNumberAttribute('status_206');
  }
  public set status206(value: number) {
    this._status206 = value;
  }
  public resetStatus206() {
    this._status206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status206Input() {
    return this._status206;
  }

  // status_207 - computed: false, optional: true, required: false
  private _status207?: number; 
  public get status207() {
    return this.getNumberAttribute('status_207');
  }
  public set status207(value: number) {
    this._status207 = value;
  }
  public resetStatus207() {
    this._status207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status207Input() {
    return this._status207;
  }

  // status_2xx - computed: false, optional: true, required: false
  private _status2Xx?: number; 
  public get status2Xx() {
    return this.getNumberAttribute('status_2xx');
  }
  public set status2Xx(value: number) {
    this._status2Xx = value;
  }
  public resetStatus2Xx() {
    this._status2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status2XxInput() {
    return this._status2Xx;
  }

  // status_300 - computed: false, optional: true, required: false
  private _status300?: number; 
  public get status300() {
    return this.getNumberAttribute('status_300');
  }
  public set status300(value: number) {
    this._status300 = value;
  }
  public resetStatus300() {
    this._status300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status300Input() {
    return this._status300;
  }

  // status_301 - computed: false, optional: true, required: false
  private _status301?: number; 
  public get status301() {
    return this.getNumberAttribute('status_301');
  }
  public set status301(value: number) {
    this._status301 = value;
  }
  public resetStatus301() {
    this._status301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status301Input() {
    return this._status301;
  }

  // status_302 - computed: false, optional: true, required: false
  private _status302?: number; 
  public get status302() {
    return this.getNumberAttribute('status_302');
  }
  public set status302(value: number) {
    this._status302 = value;
  }
  public resetStatus302() {
    this._status302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status302Input() {
    return this._status302;
  }

  // status_303 - computed: false, optional: true, required: false
  private _status303?: number; 
  public get status303() {
    return this.getNumberAttribute('status_303');
  }
  public set status303(value: number) {
    this._status303 = value;
  }
  public resetStatus303() {
    this._status303 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status303Input() {
    return this._status303;
  }

  // status_304 - computed: false, optional: true, required: false
  private _status304?: number; 
  public get status304() {
    return this.getNumberAttribute('status_304');
  }
  public set status304(value: number) {
    this._status304 = value;
  }
  public resetStatus304() {
    this._status304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status304Input() {
    return this._status304;
  }

  // status_305 - computed: false, optional: true, required: false
  private _status305?: number; 
  public get status305() {
    return this.getNumberAttribute('status_305');
  }
  public set status305(value: number) {
    this._status305 = value;
  }
  public resetStatus305() {
    this._status305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status305Input() {
    return this._status305;
  }

  // status_306 - computed: false, optional: true, required: false
  private _status306?: number; 
  public get status306() {
    return this.getNumberAttribute('status_306');
  }
  public set status306(value: number) {
    this._status306 = value;
  }
  public resetStatus306() {
    this._status306 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status306Input() {
    return this._status306;
  }

  // status_307 - computed: false, optional: true, required: false
  private _status307?: number; 
  public get status307() {
    return this.getNumberAttribute('status_307');
  }
  public set status307(value: number) {
    this._status307 = value;
  }
  public resetStatus307() {
    this._status307 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status307Input() {
    return this._status307;
  }

  // status_3xx - computed: false, optional: true, required: false
  private _status3Xx?: number; 
  public get status3Xx() {
    return this.getNumberAttribute('status_3xx');
  }
  public set status3Xx(value: number) {
    this._status3Xx = value;
  }
  public resetStatus3Xx() {
    this._status3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status3XxInput() {
    return this._status3Xx;
  }

  // status_400 - computed: false, optional: true, required: false
  private _status400?: number; 
  public get status400() {
    return this.getNumberAttribute('status_400');
  }
  public set status400(value: number) {
    this._status400 = value;
  }
  public resetStatus400() {
    this._status400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status400Input() {
    return this._status400;
  }

  // status_401 - computed: false, optional: true, required: false
  private _status401?: number; 
  public get status401() {
    return this.getNumberAttribute('status_401');
  }
  public set status401(value: number) {
    this._status401 = value;
  }
  public resetStatus401() {
    this._status401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status401Input() {
    return this._status401;
  }

  // status_402 - computed: false, optional: true, required: false
  private _status402?: number; 
  public get status402() {
    return this.getNumberAttribute('status_402');
  }
  public set status402(value: number) {
    this._status402 = value;
  }
  public resetStatus402() {
    this._status402 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status402Input() {
    return this._status402;
  }

  // status_403 - computed: false, optional: true, required: false
  private _status403?: number; 
  public get status403() {
    return this.getNumberAttribute('status_403');
  }
  public set status403(value: number) {
    this._status403 = value;
  }
  public resetStatus403() {
    this._status403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status403Input() {
    return this._status403;
  }

  // status_404 - computed: false, optional: true, required: false
  private _status404?: number; 
  public get status404() {
    return this.getNumberAttribute('status_404');
  }
  public set status404(value: number) {
    this._status404 = value;
  }
  public resetStatus404() {
    this._status404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status404Input() {
    return this._status404;
  }

  // status_405 - computed: false, optional: true, required: false
  private _status405?: number; 
  public get status405() {
    return this.getNumberAttribute('status_405');
  }
  public set status405(value: number) {
    this._status405 = value;
  }
  public resetStatus405() {
    this._status405 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status405Input() {
    return this._status405;
  }

  // status_406 - computed: false, optional: true, required: false
  private _status406?: number; 
  public get status406() {
    return this.getNumberAttribute('status_406');
  }
  public set status406(value: number) {
    this._status406 = value;
  }
  public resetStatus406() {
    this._status406 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status406Input() {
    return this._status406;
  }

  // status_407 - computed: false, optional: true, required: false
  private _status407?: number; 
  public get status407() {
    return this.getNumberAttribute('status_407');
  }
  public set status407(value: number) {
    this._status407 = value;
  }
  public resetStatus407() {
    this._status407 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status407Input() {
    return this._status407;
  }

  // status_408 - computed: false, optional: true, required: false
  private _status408?: number; 
  public get status408() {
    return this.getNumberAttribute('status_408');
  }
  public set status408(value: number) {
    this._status408 = value;
  }
  public resetStatus408() {
    this._status408 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status408Input() {
    return this._status408;
  }

  // status_409 - computed: false, optional: true, required: false
  private _status409?: number; 
  public get status409() {
    return this.getNumberAttribute('status_409');
  }
  public set status409(value: number) {
    this._status409 = value;
  }
  public resetStatus409() {
    this._status409 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status409Input() {
    return this._status409;
  }

  // status_410 - computed: false, optional: true, required: false
  private _status410?: number; 
  public get status410() {
    return this.getNumberAttribute('status_410');
  }
  public set status410(value: number) {
    this._status410 = value;
  }
  public resetStatus410() {
    this._status410 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status410Input() {
    return this._status410;
  }

  // status_411 - computed: false, optional: true, required: false
  private _status411?: number; 
  public get status411() {
    return this.getNumberAttribute('status_411');
  }
  public set status411(value: number) {
    this._status411 = value;
  }
  public resetStatus411() {
    this._status411 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status411Input() {
    return this._status411;
  }

  // status_412 - computed: false, optional: true, required: false
  private _status412?: number; 
  public get status412() {
    return this.getNumberAttribute('status_412');
  }
  public set status412(value: number) {
    this._status412 = value;
  }
  public resetStatus412() {
    this._status412 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status412Input() {
    return this._status412;
  }

  // status_413 - computed: false, optional: true, required: false
  private _status413?: number; 
  public get status413() {
    return this.getNumberAttribute('status_413');
  }
  public set status413(value: number) {
    this._status413 = value;
  }
  public resetStatus413() {
    this._status413 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status413Input() {
    return this._status413;
  }

  // status_414 - computed: false, optional: true, required: false
  private _status414?: number; 
  public get status414() {
    return this.getNumberAttribute('status_414');
  }
  public set status414(value: number) {
    this._status414 = value;
  }
  public resetStatus414() {
    this._status414 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status414Input() {
    return this._status414;
  }

  // status_415 - computed: false, optional: true, required: false
  private _status415?: number; 
  public get status415() {
    return this.getNumberAttribute('status_415');
  }
  public set status415(value: number) {
    this._status415 = value;
  }
  public resetStatus415() {
    this._status415 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status415Input() {
    return this._status415;
  }

  // status_416 - computed: false, optional: true, required: false
  private _status416?: number; 
  public get status416() {
    return this.getNumberAttribute('status_416');
  }
  public set status416(value: number) {
    this._status416 = value;
  }
  public resetStatus416() {
    this._status416 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status416Input() {
    return this._status416;
  }

  // status_417 - computed: false, optional: true, required: false
  private _status417?: number; 
  public get status417() {
    return this.getNumberAttribute('status_417');
  }
  public set status417(value: number) {
    this._status417 = value;
  }
  public resetStatus417() {
    this._status417 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status417Input() {
    return this._status417;
  }

  // status_418 - computed: false, optional: true, required: false
  private _status418?: number; 
  public get status418() {
    return this.getNumberAttribute('status_418');
  }
  public set status418(value: number) {
    this._status418 = value;
  }
  public resetStatus418() {
    this._status418 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status418Input() {
    return this._status418;
  }

  // status_422 - computed: false, optional: true, required: false
  private _status422?: number; 
  public get status422() {
    return this.getNumberAttribute('status_422');
  }
  public set status422(value: number) {
    this._status422 = value;
  }
  public resetStatus422() {
    this._status422 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status422Input() {
    return this._status422;
  }

  // status_423 - computed: false, optional: true, required: false
  private _status423?: number; 
  public get status423() {
    return this.getNumberAttribute('status_423');
  }
  public set status423(value: number) {
    this._status423 = value;
  }
  public resetStatus423() {
    this._status423 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status423Input() {
    return this._status423;
  }

  // status_424 - computed: false, optional: true, required: false
  private _status424?: number; 
  public get status424() {
    return this.getNumberAttribute('status_424');
  }
  public set status424(value: number) {
    this._status424 = value;
  }
  public resetStatus424() {
    this._status424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status424Input() {
    return this._status424;
  }

  // status_425 - computed: false, optional: true, required: false
  private _status425?: number; 
  public get status425() {
    return this.getNumberAttribute('status_425');
  }
  public set status425(value: number) {
    this._status425 = value;
  }
  public resetStatus425() {
    this._status425 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status425Input() {
    return this._status425;
  }

  // status_426 - computed: false, optional: true, required: false
  private _status426?: number; 
  public get status426() {
    return this.getNumberAttribute('status_426');
  }
  public set status426(value: number) {
    this._status426 = value;
  }
  public resetStatus426() {
    this._status426 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status426Input() {
    return this._status426;
  }

  // status_449 - computed: false, optional: true, required: false
  private _status449?: number; 
  public get status449() {
    return this.getNumberAttribute('status_449');
  }
  public set status449(value: number) {
    this._status449 = value;
  }
  public resetStatus449() {
    this._status449 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status449Input() {
    return this._status449;
  }

  // status_450 - computed: false, optional: true, required: false
  private _status450?: number; 
  public get status450() {
    return this.getNumberAttribute('status_450');
  }
  public set status450(value: number) {
    this._status450 = value;
  }
  public resetStatus450() {
    this._status450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status450Input() {
    return this._status450;
  }

  // status_4xx - computed: false, optional: true, required: false
  private _status4Xx?: number; 
  public get status4Xx() {
    return this.getNumberAttribute('status_4xx');
  }
  public set status4Xx(value: number) {
    this._status4Xx = value;
  }
  public resetStatus4Xx() {
    this._status4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status4XxInput() {
    return this._status4Xx;
  }

  // status_500 - computed: false, optional: true, required: false
  private _status500?: number; 
  public get status500() {
    return this.getNumberAttribute('status_500');
  }
  public set status500(value: number) {
    this._status500 = value;
  }
  public resetStatus500() {
    this._status500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status500Input() {
    return this._status500;
  }

  // status_501 - computed: false, optional: true, required: false
  private _status501?: number; 
  public get status501() {
    return this.getNumberAttribute('status_501');
  }
  public set status501(value: number) {
    this._status501 = value;
  }
  public resetStatus501() {
    this._status501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status501Input() {
    return this._status501;
  }

  // status_502 - computed: false, optional: true, required: false
  private _status502?: number; 
  public get status502() {
    return this.getNumberAttribute('status_502');
  }
  public set status502(value: number) {
    this._status502 = value;
  }
  public resetStatus502() {
    this._status502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status502Input() {
    return this._status502;
  }

  // status_503 - computed: false, optional: true, required: false
  private _status503?: number; 
  public get status503() {
    return this.getNumberAttribute('status_503');
  }
  public set status503(value: number) {
    this._status503 = value;
  }
  public resetStatus503() {
    this._status503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status503Input() {
    return this._status503;
  }

  // status_504 - computed: false, optional: true, required: false
  private _status504?: number; 
  public get status504() {
    return this.getNumberAttribute('status_504');
  }
  public set status504(value: number) {
    this._status504 = value;
  }
  public resetStatus504() {
    this._status504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status504Input() {
    return this._status504;
  }

  // status_505 - computed: false, optional: true, required: false
  private _status505?: number; 
  public get status505() {
    return this.getNumberAttribute('status_505');
  }
  public set status505(value: number) {
    this._status505 = value;
  }
  public resetStatus505() {
    this._status505 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status505Input() {
    return this._status505;
  }

  // status_506 - computed: false, optional: true, required: false
  private _status506?: number; 
  public get status506() {
    return this.getNumberAttribute('status_506');
  }
  public set status506(value: number) {
    this._status506 = value;
  }
  public resetStatus506() {
    this._status506 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status506Input() {
    return this._status506;
  }

  // status_507 - computed: false, optional: true, required: false
  private _status507?: number; 
  public get status507() {
    return this.getNumberAttribute('status_507');
  }
  public set status507(value: number) {
    this._status507 = value;
  }
  public resetStatus507() {
    this._status507 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status507Input() {
    return this._status507;
  }

  // status_508 - computed: false, optional: true, required: false
  private _status508?: number; 
  public get status508() {
    return this.getNumberAttribute('status_508');
  }
  public set status508(value: number) {
    this._status508 = value;
  }
  public resetStatus508() {
    this._status508 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status508Input() {
    return this._status508;
  }

  // status_509 - computed: false, optional: true, required: false
  private _status509?: number; 
  public get status509() {
    return this.getNumberAttribute('status_509');
  }
  public set status509(value: number) {
    this._status509 = value;
  }
  public resetStatus509() {
    this._status509 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status509Input() {
    return this._status509;
  }

  // status_510 - computed: false, optional: true, required: false
  private _status510?: number; 
  public get status510() {
    return this.getNumberAttribute('status_510');
  }
  public set status510(value: number) {
    this._status510 = value;
  }
  public resetStatus510() {
    this._status510 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status510Input() {
    return this._status510;
  }

  // status_5xx - computed: false, optional: true, required: false
  private _status5Xx?: number; 
  public get status5Xx() {
    return this.getNumberAttribute('status_5xx');
  }
  public set status5Xx(value: number) {
    this._status5Xx = value;
  }
  public resetStatus5Xx() {
    this._status5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status5XxInput() {
    return this._status5Xx;
  }

  // status_6xx - computed: false, optional: true, required: false
  private _status6Xx?: number; 
  public get status6Xx() {
    return this.getNumberAttribute('status_6xx');
  }
  public set status6Xx(value: number) {
    this._status6Xx = value;
  }
  public resetStatus6Xx() {
    this._status6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status6XxInput() {
    return this._status6Xx;
  }
}

export class DataThunderSlbIcapHttpOperOperIcapHttpCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderSlbIcapHttpOperOperIcapHttpCpuListStructOutputReference {
    return new DataThunderSlbIcapHttpOperOperIcapHttpCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbIcapHttpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#cpu_count DataThunderSlbIcapHttpOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * icap_http_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#icap_http_cpu_list DataThunderSlbIcapHttpOper#icap_http_cpu_list}
  */
  readonly icapHttpCpuList?: DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbIcapHttpOperOperToTerraform(struct?: DataThunderSlbIcapHttpOperOperOutputReference | DataThunderSlbIcapHttpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    icap_http_cpu_list: cdktf.listMapper(dataThunderSlbIcapHttpOperOperIcapHttpCpuListStructToTerraform, true)(struct!.icapHttpCpuList),
  }
}


export function dataThunderSlbIcapHttpOperOperToHclTerraform(struct?: DataThunderSlbIcapHttpOperOperOutputReference | DataThunderSlbIcapHttpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icap_http_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbIcapHttpOperOperIcapHttpCpuListStructToHclTerraform, true)(struct!.icapHttpCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbIcapHttpOperOperIcapHttpCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbIcapHttpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbIcapHttpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._icapHttpCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icapHttpCpuList = this._icapHttpCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbIcapHttpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._icapHttpCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._icapHttpCpuList.internalValue = value.icapHttpCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // icap_http_cpu_list - computed: false, optional: true, required: false
  private _icapHttpCpuList = new DataThunderSlbIcapHttpOperOperIcapHttpCpuListStructList(this, "icap_http_cpu_list", false);
  public get icapHttpCpuList() {
    return this._icapHttpCpuList;
  }
  public putIcapHttpCpuList(value: DataThunderSlbIcapHttpOperOperIcapHttpCpuListStruct[] | cdktf.IResolvable) {
    this._icapHttpCpuList.internalValue = value;
  }
  public resetIcapHttpCpuList() {
    this._icapHttpCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapHttpCpuListInput() {
    return this._icapHttpCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper thunder_slb_icap_http_oper}
*/
export class DataThunderSlbIcapHttpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_icap_http_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbIcapHttpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbIcapHttpOper to import
  * @param importFromId The id of the existing DataThunderSlbIcapHttpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbIcapHttpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_icap_http_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_http_oper thunder_slb_icap_http_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbIcapHttpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbIcapHttpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_icap_http_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._oper.internalValue = config.oper;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbIcapHttpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbIcapHttpOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbIcapHttpOperOperToTerraform(this._oper.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderSlbIcapHttpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbIcapHttpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
