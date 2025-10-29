// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbTsigOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#id DataThunderSlbTsigOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#oper DataThunderSlbTsigOper#oper}
  */
  readonly oper?: DataThunderSlbTsigOperOper;
}
export interface DataThunderSlbTsigOperOperFileListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#file DataThunderSlbTsigOper#file}
  */
  readonly file?: string;
}

export function dataThunderSlbTsigOperOperFileListStructToTerraform(struct?: DataThunderSlbTsigOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file: cdktf.stringToTerraform(struct!.file),
  }
}


export function dataThunderSlbTsigOperOperFileListStructToHclTerraform(struct?: DataThunderSlbTsigOperOperFileListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTsigOperOperFileListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbTsigOperOperFileListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTsigOperOperFileListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._file = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._file = value.file;
    }
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }
}

export class DataThunderSlbTsigOperOperFileListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbTsigOperOperFileListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbTsigOperOperFileListStructOutputReference {
    return new DataThunderSlbTsigOperOperFileListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbTsigOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#filter_entry DataThunderSlbTsigOper#filter_entry}
  */
  readonly filterEntry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#tsig_count DataThunderSlbTsigOper#tsig_count}
  */
  readonly tsigCount?: number;
  /**
  * file_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#file_list DataThunderSlbTsigOper#file_list}
  */
  readonly fileList?: DataThunderSlbTsigOperOperFileListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbTsigOperOperToTerraform(struct?: DataThunderSlbTsigOperOperOutputReference | DataThunderSlbTsigOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter_entry: cdktf.stringToTerraform(struct!.filterEntry),
    tsig_count: cdktf.numberToTerraform(struct!.tsigCount),
    file_list: cdktf.listMapper(dataThunderSlbTsigOperOperFileListStructToTerraform, true)(struct!.fileList),
  }
}


export function dataThunderSlbTsigOperOperToHclTerraform(struct?: DataThunderSlbTsigOperOperOutputReference | DataThunderSlbTsigOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter_entry: {
      value: cdktf.stringToHclTerraform(struct!.filterEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tsig_count: {
      value: cdktf.numberToHclTerraform(struct!.tsigCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_list: {
      value: cdktf.listMapperHcl(dataThunderSlbTsigOperOperFileListStructToHclTerraform, true)(struct!.fileList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbTsigOperOperFileListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbTsigOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbTsigOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filterEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterEntry = this._filterEntry;
    }
    if (this._tsigCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.tsigCount = this._tsigCount;
    }
    if (this._fileList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileList = this._fileList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbTsigOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._filterEntry = undefined;
      this._tsigCount = undefined;
      this._fileList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._filterEntry = value.filterEntry;
      this._tsigCount = value.tsigCount;
      this._fileList.internalValue = value.fileList;
    }
  }

  // filter_entry - computed: false, optional: true, required: false
  private _filterEntry?: string; 
  public get filterEntry() {
    return this.getStringAttribute('filter_entry');
  }
  public set filterEntry(value: string) {
    this._filterEntry = value;
  }
  public resetFilterEntry() {
    this._filterEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterEntryInput() {
    return this._filterEntry;
  }

  // tsig_count - computed: false, optional: true, required: false
  private _tsigCount?: number; 
  public get tsigCount() {
    return this.getNumberAttribute('tsig_count');
  }
  public set tsigCount(value: number) {
    this._tsigCount = value;
  }
  public resetTsigCount() {
    this._tsigCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsigCountInput() {
    return this._tsigCount;
  }

  // file_list - computed: false, optional: true, required: false
  private _fileList = new DataThunderSlbTsigOperOperFileListStructList(this, "file_list", false);
  public get fileList() {
    return this._fileList;
  }
  public putFileList(value: DataThunderSlbTsigOperOperFileListStruct[] | cdktf.IResolvable) {
    this._fileList.internalValue = value;
  }
  public resetFileList() {
    this._fileList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileListInput() {
    return this._fileList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper thunder_slb_tsig_oper}
*/
export class DataThunderSlbTsigOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_tsig_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbTsigOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbTsigOper to import
  * @param importFromId The id of the existing DataThunderSlbTsigOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbTsigOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_tsig_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_tsig_oper thunder_slb_tsig_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbTsigOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbTsigOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_tsig_oper',
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
  private _oper = new DataThunderSlbTsigOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbTsigOperOper) {
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
      oper: dataThunderSlbTsigOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbTsigOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbTsigOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
