// https://registry.terraform.io/providers/netlify/netlify/0.2.3/docs/data-sources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetlifyTeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID or slug are required if a default team was not configured in the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.2.3/docs/data-sources/team#id DataNetlifyTeam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID or slug are required if a default team was not configured in the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netlify/netlify/0.2.3/docs/data-sources/team#slug DataNetlifyTeam#slug}
  */
  readonly slug?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netlify/netlify/0.2.3/docs/data-sources/team netlify_team}
*/
export class DataNetlifyTeam extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netlify_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetlifyTeam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetlifyTeam to import
  * @param importFromId The id of the existing DataNetlifyTeam that should be imported. Refer to the {@link https://registry.terraform.io/providers/netlify/netlify/0.2.3/docs/data-sources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetlifyTeam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netlify_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netlify/netlify/0.2.3/docs/data-sources/team netlify_team} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetlifyTeamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetlifyTeamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netlify_team',
      terraformGeneratorMetadata: {
        providerName: 'netlify',
        providerVersion: '0.2.3'
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
    this._slug = config.slug;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      slug: cdktf.stringToTerraform(this._slug),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
