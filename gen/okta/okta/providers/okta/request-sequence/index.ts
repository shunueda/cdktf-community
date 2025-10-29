// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/request_sequence
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RequestSequenceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the request sequence. This is typically the sequence ID in Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/request_sequence#id RequestSequence#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The id of the resource in Okta ID format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/request_sequence#resource_id RequestSequence#resource_id}
  */
  readonly resourceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/request_sequence okta_request_sequence}
*/
export class RequestSequence extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_request_sequence";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RequestSequence resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RequestSequence to import
  * @param importFromId The id of the existing RequestSequence that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/request_sequence#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RequestSequence to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_request_sequence", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/request_sequence okta_request_sequence} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RequestSequenceConfig
  */
  public constructor(scope: Construct, id: string, config: RequestSequenceConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_request_sequence',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
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
    this._resourceId = config.resourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compatible_resource_types - computed: true, optional: false, required: false
  public get compatibleResourceTypes() {
    return this.getListAttribute('compatible_resource_types');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // link - computed: true, optional: false, required: false
  public get link() {
    return this.getStringAttribute('link');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
