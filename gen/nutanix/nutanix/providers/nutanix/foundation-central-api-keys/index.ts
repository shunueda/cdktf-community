// https://registry.terraform.io/providers/nutanix/nutanix/2.3.1/docs/resources/foundation_central_api_keys
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FoundationCentralApiKeysConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.1/docs/resources/foundation_central_api_keys#alias FoundationCentralApiKeys#alias}
  */
  readonly alias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.1/docs/resources/foundation_central_api_keys#id FoundationCentralApiKeys#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.1/docs/resources/foundation_central_api_keys nutanix_foundation_central_api_keys}
*/
export class FoundationCentralApiKeys extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nutanix_foundation_central_api_keys";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FoundationCentralApiKeys resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FoundationCentralApiKeys to import
  * @param importFromId The id of the existing FoundationCentralApiKeys that should be imported. Refer to the {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.1/docs/resources/foundation_central_api_keys#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FoundationCentralApiKeys to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nutanix_foundation_central_api_keys", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/nutanix/nutanix/2.3.1/docs/resources/foundation_central_api_keys nutanix_foundation_central_api_keys} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FoundationCentralApiKeysConfig
  */
  public constructor(scope: Construct, id: string, config: FoundationCentralApiKeysConfig) {
    super(scope, id, {
      terraformResourceType: 'nutanix_foundation_central_api_keys',
      terraformGeneratorMetadata: {
        providerName: 'nutanix',
        providerVersion: '2.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alias = config.alias;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // api_key - computed: true, optional: false, required: false
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }

  // created_timestamp - computed: true, optional: false, required: false
  public get createdTimestamp() {
    return this.getStringAttribute('created_timestamp');
  }

  // current_time - computed: true, optional: false, required: false
  public get currentTime() {
    return this.getStringAttribute('current_time');
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

  // key_uuid - computed: true, optional: false, required: false
  public get keyUuid() {
    return this.getStringAttribute('key_uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias: cdktf.stringToTerraform(this._alias),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
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
