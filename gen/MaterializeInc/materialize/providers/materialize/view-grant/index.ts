// https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ViewGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database that the view belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#database_name ViewGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#id ViewGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The privilege to grant to the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#privilege ViewGrant#privilege}
  */
  readonly privilege: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#region ViewGrant#region}
  */
  readonly region?: string;
  /**
  * The name of the role to grant privilege to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#role_name ViewGrant#role_name}
  */
  readonly roleName: string;
  /**
  * The schema that the view being to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#schema_name ViewGrant#schema_name}
  */
  readonly schemaName: string;
  /**
  * The view that is being granted on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#view_name ViewGrant#view_name}
  */
  readonly viewName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant materialize_view_grant}
*/
export class ViewGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_view_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ViewGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ViewGrant to import
  * @param importFromId The id of the existing ViewGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ViewGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_view_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/view_grant materialize_view_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ViewGrantConfig
  */
  public constructor(scope: Construct, id: string, config: ViewGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_view_grant',
      terraformGeneratorMetadata: {
        providerName: 'materialize',
        providerVersion: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._privilege = config.privilege;
    this._region = config.region;
    this._roleName = config.roleName;
    this._schemaName = config.schemaName;
    this._viewName = config.viewName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_name - computed: false, optional: false, required: true
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
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

  // privilege - computed: false, optional: false, required: true
  private _privilege?: string; 
  public get privilege() {
    return this.getStringAttribute('privilege');
  }
  public set privilege(value: string) {
    this._privilege = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegeInput() {
    return this._privilege;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // role_name - computed: false, optional: false, required: true
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // schema_name - computed: false, optional: false, required: true
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // view_name - computed: false, optional: false, required: true
  private _viewName?: string; 
  public get viewName() {
    return this.getStringAttribute('view_name');
  }
  public set viewName(value: string) {
    this._viewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viewNameInput() {
    return this._viewName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      privilege: cdktf.stringToTerraform(this._privilege),
      region: cdktf.stringToTerraform(this._region),
      role_name: cdktf.stringToTerraform(this._roleName),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      view_name: cdktf.stringToTerraform(this._viewName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_name: {
        value: cdktf.stringToHclTerraform(this._databaseName),
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
      privilege: {
        value: cdktf.stringToHclTerraform(this._privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      view_name: {
        value: cdktf.stringToHclTerraform(this._viewName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
