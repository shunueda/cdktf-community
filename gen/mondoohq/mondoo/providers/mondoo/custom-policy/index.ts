// https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy#content CustomPolicy#content}
  */
  readonly content?: string;
  /**
  * If set to true, existing policies are overwritten.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy#overwrite CustomPolicy#overwrite}
  */
  readonly overwrite?: boolean | cdktf.IResolvable;
  /**
  * Mondoo scope MRN. Provide this if not uploading to a space
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy#scope_mrn CustomPolicy#scope_mrn}
  */
  readonly scopeMrn?: string;
  /**
  * A path to the data you want to upload. Must be defined if content is not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy#source CustomPolicy#source}
  */
  readonly source?: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy#space_id CustomPolicy#space_id}
  */
  readonly spaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy mondoo_custom_policy}
*/
export class CustomPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_custom_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomPolicy to import
  * @param importFromId The id of the existing CustomPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_custom_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.32.0/docs/resources/custom_policy mondoo_custom_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CustomPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mondoo_custom_policy',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.32.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._overwrite = config.overwrite;
    this._scopeMrn = config.scopeMrn;
    this._source = config.source;
    this._spaceId = config.spaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // content - computed: true, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // crc32c - computed: true, optional: false, required: false
  public get crc32C() {
    return this.getStringAttribute('crc32c');
  }

  // mrns - computed: true, optional: false, required: false
  public get mrns() {
    return this.getListAttribute('mrns');
  }

  // overwrite - computed: true, optional: true, required: false
  private _overwrite?: boolean | cdktf.IResolvable; 
  public get overwrite() {
    return this.getBooleanAttribute('overwrite');
  }
  public set overwrite(value: boolean | cdktf.IResolvable) {
    this._overwrite = value;
  }
  public resetOverwrite() {
    this._overwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overwriteInput() {
    return this._overwrite;
  }

  // scope_mrn - computed: false, optional: true, required: false
  private _scopeMrn?: string; 
  public get scopeMrn() {
    return this.getStringAttribute('scope_mrn');
  }
  public set scopeMrn(value: string) {
    this._scopeMrn = value;
  }
  public resetScopeMrn() {
    this._scopeMrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeMrnInput() {
    return this._scopeMrn;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      overwrite: cdktf.booleanToTerraform(this._overwrite),
      scope_mrn: cdktf.stringToTerraform(this._scopeMrn),
      source: cdktf.stringToTerraform(this._source),
      space_id: cdktf.stringToTerraform(this._spaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overwrite: {
        value: cdktf.booleanToHclTerraform(this._overwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope_mrn: {
        value: cdktf.stringToHclTerraform(this._scopeMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
