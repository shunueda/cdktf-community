// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackAscmEnvironmentServicesByProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product#id DataAlibabacloudstackAscmEnvironmentServicesByProduct#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product#ids DataAlibabacloudstackAscmEnvironmentServicesByProduct#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product#output_file DataAlibabacloudstackAscmEnvironmentServicesByProduct#output_file}
  */
  readonly outputFile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product alibabacloudstack_ascm_environment_services_by_product}
*/
export class DataAlibabacloudstackAscmEnvironmentServicesByProduct extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ascm_environment_services_by_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackAscmEnvironmentServicesByProduct resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackAscmEnvironmentServicesByProduct to import
  * @param importFromId The id of the existing DataAlibabacloudstackAscmEnvironmentServicesByProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackAscmEnvironmentServicesByProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ascm_environment_services_by_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.18/docs/data-sources/ascm_environment_services_by_product alibabacloudstack_ascm_environment_services_by_product} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackAscmEnvironmentServicesByProductConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackAscmEnvironmentServicesByProductConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ascm_environment_services_by_product',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.18'
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
    this._ids = config.ids;
    this._outputFile = config.outputFile;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getListAttribute('result');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      output_file: cdktf.stringToTerraform(this._outputFile),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
