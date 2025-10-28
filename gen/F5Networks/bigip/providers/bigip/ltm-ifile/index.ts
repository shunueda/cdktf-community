// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmIfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The system iFile name to reference (e.g., /Common/my-sys-ifile).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile#file_name LtmIfile#file_name}
  */
  readonly fileName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile#id LtmIfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the LTM iFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile#name LtmIfile#name}
  */
  readonly name: string;
  /**
  * Partition for the LTM iFile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile#partition LtmIfile#partition}
  */
  readonly partition?: string;
  /**
  * Subdirectory within the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile#sub_path LtmIfile#sub_path}
  */
  readonly subPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile bigip_ltm_ifile}
*/
export class LtmIfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_ifile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmIfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmIfile to import
  * @param importFromId The id of the existing LtmIfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmIfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_ifile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_ifile bigip_ltm_ifile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmIfileConfig
  */
  public constructor(scope: Construct, id: string, config: LtmIfileConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_ifile',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fileName = config.fileName;
    this._id = config.id;
    this._name = config.name;
    this._partition = config.partition;
    this._subPath = config.subPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // file_name - computed: false, optional: false, required: true
  private _fileName?: string; 
  public get fileName() {
    return this.getStringAttribute('file_name');
  }
  public set fileName(value: string) {
    this._fileName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileNameInput() {
    return this._fileName;
  }

  // full_path - computed: true, optional: false, required: false
  public get fullPath() {
    return this.getStringAttribute('full_path');
  }

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      file_name: cdktf.stringToTerraform(this._fileName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      partition: cdktf.stringToTerraform(this._partition),
      sub_path: cdktf.stringToTerraform(this._subPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      file_name: {
        value: cdktf.stringToHclTerraform(this._fileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_path: {
        value: cdktf.stringToHclTerraform(this._subPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
