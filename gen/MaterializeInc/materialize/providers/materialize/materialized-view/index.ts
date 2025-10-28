// https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaterializedViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The cluster to maintain the materialized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#cluster_name MaterializedView#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Comment on an object in the database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#comment MaterializedView#comment}
  */
  readonly comment?: string;
  /**
  * The identifier for the materialized view database in Materialize. Defaults to `MZ_DATABASE` environment variable if set or `materialize` if environment variable is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#database_name MaterializedView#database_name}
  */
  readonly databaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#id MaterializedView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The identifier for the materialized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#name MaterializedView#name}
  */
  readonly name: string;
  /**
  * A list of columns for which to create non-null assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#not_null_assertion MaterializedView#not_null_assertion}
  */
  readonly notNullAssertion?: string[];
  /**
  * The owernship role of the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#ownership_role MaterializedView#ownership_role}
  */
  readonly ownershipRole?: string;
  /**
  * The region to use for the resource connection. If not set, the default region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#region MaterializedView#region}
  */
  readonly region?: string;
  /**
  * The identifier for the materialized view schema in Materialize. Defaults to `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#schema_name MaterializedView#schema_name}
  */
  readonly schemaName?: string;
  /**
  * The SQL statement for the materialized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#statement MaterializedView#statement}
  */
  readonly statement: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view materialize_materialized_view}
*/
export class MaterializedView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "materialize_materialized_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MaterializedView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MaterializedView to import
  * @param importFromId The id of the existing MaterializedView that should be imported. Refer to the {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MaterializedView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "materialize_materialized_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/materializeinc/materialize/0.9.1/docs/resources/materialized_view materialize_materialized_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaterializedViewConfig
  */
  public constructor(scope: Construct, id: string, config: MaterializedViewConfig) {
    super(scope, id, {
      terraformResourceType: 'materialize_materialized_view',
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
    this._clusterName = config.clusterName;
    this._comment = config.comment;
    this._databaseName = config.databaseName;
    this._id = config.id;
    this._name = config.name;
    this._notNullAssertion = config.notNullAssertion;
    this._ownershipRole = config.ownershipRole;
    this._region = config.region;
    this._schemaName = config.schemaName;
    this._statement = config.statement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_sql - computed: true, optional: false, required: false
  public get createSql() {
    return this.getStringAttribute('create_sql');
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
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

  // not_null_assertion - computed: false, optional: true, required: false
  private _notNullAssertion?: string[]; 
  public get notNullAssertion() {
    return this.getListAttribute('not_null_assertion');
  }
  public set notNullAssertion(value: string[]) {
    this._notNullAssertion = value;
  }
  public resetNotNullAssertion() {
    this._notNullAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notNullAssertionInput() {
    return this._notNullAssertion;
  }

  // ownership_role - computed: true, optional: true, required: false
  private _ownershipRole?: string; 
  public get ownershipRole() {
    return this.getStringAttribute('ownership_role');
  }
  public set ownershipRole(value: string) {
    this._ownershipRole = value;
  }
  public resetOwnershipRole() {
    this._ownershipRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownershipRoleInput() {
    return this._ownershipRole;
  }

  // qualified_sql_name - computed: true, optional: false, required: false
  public get qualifiedSqlName() {
    return this.getStringAttribute('qualified_sql_name');
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

  // schema_name - computed: false, optional: true, required: false
  private _schemaName?: string; 
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }
  public set schemaName(value: string) {
    this._schemaName = value;
  }
  public resetSchemaName() {
    this._schemaName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaNameInput() {
    return this._schemaName;
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      comment: cdktf.stringToTerraform(this._comment),
      database_name: cdktf.stringToTerraform(this._databaseName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      not_null_assertion: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notNullAssertion),
      ownership_role: cdktf.stringToTerraform(this._ownershipRole),
      region: cdktf.stringToTerraform(this._region),
      schema_name: cdktf.stringToTerraform(this._schemaName),
      statement: cdktf.stringToTerraform(this._statement),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_null_assertion: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notNullAssertion),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ownership_role: {
        value: cdktf.stringToHclTerraform(this._ownershipRole),
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
      schema_name: {
        value: cdktf.stringToHclTerraform(this._schemaName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement: {
        value: cdktf.stringToHclTerraform(this._statement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
