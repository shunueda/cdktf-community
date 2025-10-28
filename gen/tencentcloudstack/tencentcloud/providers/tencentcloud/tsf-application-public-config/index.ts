// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfApplicationPublicConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Config Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#config_name TsfApplicationPublicConfig#config_name}
  */
  readonly configName: string;
  /**
  * Config type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#config_type TsfApplicationPublicConfig#config_type}
  */
  readonly configType?: string;
  /**
  * config value, only yaml file allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#config_value TsfApplicationPublicConfig#config_value}
  */
  readonly configValue: string;
  /**
  * config version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#config_version TsfApplicationPublicConfig#config_version}
  */
  readonly configVersion: string;
  /**
  * Config version description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#config_version_desc TsfApplicationPublicConfig#config_version_desc}
  */
  readonly configVersionDesc?: string;
  /**
  * the config value is encoded with base64 or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#encode_with_base64 TsfApplicationPublicConfig#encode_with_base64}
  */
  readonly encodeWithBase64?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#id TsfApplicationPublicConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * datasource for auth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#program_id_list TsfApplicationPublicConfig#program_id_list}
  */
  readonly programIdList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config tencentcloud_tsf_application_public_config}
*/
export class TsfApplicationPublicConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_application_public_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfApplicationPublicConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfApplicationPublicConfig to import
  * @param importFromId The id of the existing TsfApplicationPublicConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfApplicationPublicConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_application_public_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.32/docs/resources/tsf_application_public_config tencentcloud_tsf_application_public_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfApplicationPublicConfigConfig
  */
  public constructor(scope: Construct, id: string, config: TsfApplicationPublicConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_application_public_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.32'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configName = config.configName;
    this._configType = config.configType;
    this._configValue = config.configValue;
    this._configVersion = config.configVersion;
    this._configVersionDesc = config.configVersionDesc;
    this._encodeWithBase64 = config.encodeWithBase64;
    this._id = config.id;
    this._programIdList = config.programIdList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_name - computed: false, optional: false, required: true
  private _configName?: string; 
  public get configName() {
    return this.getStringAttribute('config_name');
  }
  public set configName(value: string) {
    this._configName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configNameInput() {
    return this._configName;
  }

  // config_type - computed: false, optional: true, required: false
  private _configType?: string; 
  public get configType() {
    return this.getStringAttribute('config_type');
  }
  public set configType(value: string) {
    this._configType = value;
  }
  public resetConfigType() {
    this._configType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTypeInput() {
    return this._configType;
  }

  // config_value - computed: false, optional: false, required: true
  private _configValue?: string; 
  public get configValue() {
    return this.getStringAttribute('config_value');
  }
  public set configValue(value: string) {
    this._configValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configValueInput() {
    return this._configValue;
  }

  // config_version - computed: false, optional: false, required: true
  private _configVersion?: string; 
  public get configVersion() {
    return this.getStringAttribute('config_version');
  }
  public set configVersion(value: string) {
    this._configVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionInput() {
    return this._configVersion;
  }

  // config_version_desc - computed: false, optional: true, required: false
  private _configVersionDesc?: string; 
  public get configVersionDesc() {
    return this.getStringAttribute('config_version_desc');
  }
  public set configVersionDesc(value: string) {
    this._configVersionDesc = value;
  }
  public resetConfigVersionDesc() {
    this._configVersionDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVersionDescInput() {
    return this._configVersionDesc;
  }

  // encode_with_base64 - computed: false, optional: true, required: false
  private _encodeWithBase64?: boolean | cdktf.IResolvable; 
  public get encodeWithBase64() {
    return this.getBooleanAttribute('encode_with_base64');
  }
  public set encodeWithBase64(value: boolean | cdktf.IResolvable) {
    this._encodeWithBase64 = value;
  }
  public resetEncodeWithBase64() {
    this._encodeWithBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeWithBase64Input() {
    return this._encodeWithBase64;
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

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_name: cdktf.stringToTerraform(this._configName),
      config_type: cdktf.stringToTerraform(this._configType),
      config_value: cdktf.stringToTerraform(this._configValue),
      config_version: cdktf.stringToTerraform(this._configVersion),
      config_version_desc: cdktf.stringToTerraform(this._configVersionDesc),
      encode_with_base64: cdktf.booleanToTerraform(this._encodeWithBase64),
      id: cdktf.stringToTerraform(this._id),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_name: {
        value: cdktf.stringToHclTerraform(this._configName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_type: {
        value: cdktf.stringToHclTerraform(this._configType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_value: {
        value: cdktf.stringToHclTerraform(this._configValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_version: {
        value: cdktf.stringToHclTerraform(this._configVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_version_desc: {
        value: cdktf.stringToHclTerraform(this._configVersionDesc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encode_with_base64: {
        value: cdktf.booleanToHclTerraform(this._encodeWithBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
