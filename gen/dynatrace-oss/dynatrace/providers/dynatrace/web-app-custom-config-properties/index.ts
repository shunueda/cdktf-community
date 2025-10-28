// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WebAppCustomConfigPropertiesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The scope of this setting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties#application_id WebAppCustomConfigProperties#application_id}
  */
  readonly applicationId: string;
  /**
  * Custom configuration property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties#custom_property WebAppCustomConfigProperties#custom_property}
  */
  readonly customProperty: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties#id WebAppCustomConfigProperties#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties dynatrace_web_app_custom_config_properties}
*/
export class WebAppCustomConfigProperties extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_web_app_custom_config_properties";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WebAppCustomConfigProperties resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WebAppCustomConfigProperties to import
  * @param importFromId The id of the existing WebAppCustomConfigProperties that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WebAppCustomConfigProperties to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_web_app_custom_config_properties", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.86.0/docs/resources/web_app_custom_config_properties dynatrace_web_app_custom_config_properties} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WebAppCustomConfigPropertiesConfig
  */
  public constructor(scope: Construct, id: string, config: WebAppCustomConfigPropertiesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_web_app_custom_config_properties',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.86.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._customProperty = config.customProperty;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // custom_property - computed: false, optional: false, required: true
  private _customProperty?: string; 
  public get customProperty() {
    return this.getStringAttribute('custom_property');
  }
  public set customProperty(value: string) {
    this._customProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertyInput() {
    return this._customProperty;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      custom_property: cdktf.stringToTerraform(this._customProperty),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_property: {
        value: cdktf.stringToHclTerraform(this._customProperty),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
