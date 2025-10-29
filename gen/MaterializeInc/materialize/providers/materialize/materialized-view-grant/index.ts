// https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaterializedViewGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * The database that the materialized view belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#database_name MaterializedViewGrant#database_name}
  */
  readonly databaseName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#id MaterializedViewGrant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The materialized view that is being granted on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#materialized_view_name MaterializedViewGrant#materialized_view_name}
  */
  readonly materializedViewName: string;
  /**
  * The privilege to grant to the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#privilege MaterializedViewGrant#privilege}
  */
  readonly privilege: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#region MaterializedViewGrant#region}
  */
  readonly region?: string;
  /**
  * The name of the role to grant privilege to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#role_name MaterializedViewGrant#role_name}
  */
  readonly roleName: string;
  /**
  * The schema that the materialized view being to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#schema_name MaterializedViewGrant#schema_name}
  */
  readonly schemaName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant materialize_materialized_view_grant}
*/
export class MaterializedViewGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_materialized_view_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaterializedViewGrant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaterializedViewGrant to import
  * @param importFromId The id of the existing MaterializedViewGrant that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaterializedViewGrant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_materialized_view_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view_grant materialize_materialized_view_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaterializedViewGrantConfig
  */
  public constructor(scope: Construct, id: string, config: MaterializedViewGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_materialized_view_grant',
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
    this._materializedViewName = config.materializedViewName;
    this._privilege = config.privilege;
    this._region = config.region;
    this._roleName = config.roleName;
    this._schemaName = config.schemaName;
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

  // materialized_view_name - computed: false, optional: false, required: true
  private _materializedViewName?: string; 
  public get materializedViewName() {
    return this.getStringAttribute('materialized_view_name');
  }
  public set materializedViewName(value: string) {
    this._materializedViewName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewNameInput() {
    return this._materializedViewName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      materialized_view_name: cdktf.stringToTerraform(this._materializedViewName),
      privilege: cdktf.stringToTerraform(this._privilege),
      region: cdktf.stringToTerraform(this._region),
      role_name: cdktf.stringToTerraform(this._roleName),
      schema_name: cdktf.stringToTerraform(this._schemaName),
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
      materialized_view_name: {
        value: cdktf.stringToHclTerraform(this._materializedViewName),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
