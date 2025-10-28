// https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLinodeDatabaseBackupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the Managed Database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#database_id DataLinodeDatabaseBackups#database_id}
  */
  readonly databaseId: number;
  /**
  * The type of the Managed Database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#database_type DataLinodeDatabaseBackups#database_type}
  */
  readonly databaseType: string;
  /**
  * If true, only the latest engine version will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#latest DataLinodeDatabaseBackups#latest}
  */
  readonly latest?: boolean | cdktf.IResolvable;
  /**
  * The order in which results should be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#order DataLinodeDatabaseBackups#order}
  */
  readonly order?: string;
  /**
  * The attribute to order the results by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#order_by DataLinodeDatabaseBackups#order_by}
  */
  readonly orderBy?: string;
  /**
  * backups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#backups DataLinodeDatabaseBackups#backups}
  */
  readonly backups?: DataLinodeDatabaseBackupsBackups[] | cdktf.IResolvable;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#filter DataLinodeDatabaseBackups#filter}
  */
  readonly filter?: DataLinodeDatabaseBackupsFilter[] | cdktf.IResolvable;
}
export interface DataLinodeDatabaseBackupsBackups {
}

export function dataLinodeDatabaseBackupsBackupsToTerraform(struct?: DataLinodeDatabaseBackupsBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLinodeDatabaseBackupsBackupsToHclTerraform(struct?: DataLinodeDatabaseBackupsBackups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLinodeDatabaseBackupsBackupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLinodeDatabaseBackupsBackups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseBackupsBackups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataLinodeDatabaseBackupsBackupsList extends cdktf.ComplexList {
  public internalValue? : DataLinodeDatabaseBackupsBackups[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLinodeDatabaseBackupsBackupsOutputReference {
    return new DataLinodeDatabaseBackupsBackupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLinodeDatabaseBackupsFilter {
  /**
  * The type of comparison to use for this filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#match_by DataLinodeDatabaseBackups#match_by}
  */
  readonly matchBy?: string;
  /**
  * The name of the attribute to filter on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#name DataLinodeDatabaseBackups#name}
  */
  readonly name: string;
  /**
  * The value(s) to be used in the filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#values DataLinodeDatabaseBackups#values}
  */
  readonly values: string[];
}

export function dataLinodeDatabaseBackupsFilterToTerraform(struct?: DataLinodeDatabaseBackupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_by: cdktf.stringToTerraform(struct!.matchBy),
    name: cdktf.stringToTerraform(struct!.name),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataLinodeDatabaseBackupsFilterToHclTerraform(struct?: DataLinodeDatabaseBackupsFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_by: {
      value: cdktf.stringToHclTerraform(struct!.matchBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLinodeDatabaseBackupsFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataLinodeDatabaseBackupsFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchBy = this._matchBy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLinodeDatabaseBackupsFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchBy = undefined;
      this._name = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchBy = value.matchBy;
      this._name = value.name;
      this._values = value.values;
    }
  }

  // match_by - computed: false, optional: true, required: false
  private _matchBy?: string; 
  public get matchBy() {
    return this.getStringAttribute('match_by');
  }
  public set matchBy(value: string) {
    this._matchBy = value;
  }
  public resetMatchBy() {
    this._matchBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchByInput() {
    return this._matchBy;
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

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataLinodeDatabaseBackupsFilterList extends cdktf.ComplexList {
  public internalValue? : DataLinodeDatabaseBackupsFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataLinodeDatabaseBackupsFilterOutputReference {
    return new DataLinodeDatabaseBackupsFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups linode_database_backups}
*/
export class DataLinodeDatabaseBackups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_database_backups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLinodeDatabaseBackups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLinodeDatabaseBackups to import
  * @param importFromId The id of the existing DataLinodeDatabaseBackups that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLinodeDatabaseBackups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_database_backups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.5.0/docs/data-sources/database_backups linode_database_backups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLinodeDatabaseBackupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataLinodeDatabaseBackupsConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_database_backups',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._databaseId = config.databaseId;
    this._databaseType = config.databaseType;
    this._latest = config.latest;
    this._order = config.order;
    this._orderBy = config.orderBy;
    this._backups.internalValue = config.backups;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // database_id - computed: false, optional: false, required: true
  private _databaseId?: number; 
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }
  public set databaseId(value: number) {
    this._databaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseIdInput() {
    return this._databaseId;
  }

  // database_type - computed: false, optional: false, required: true
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // latest - computed: false, optional: true, required: false
  private _latest?: boolean | cdktf.IResolvable; 
  public get latest() {
    return this.getBooleanAttribute('latest');
  }
  public set latest(value: boolean | cdktf.IResolvable) {
    this._latest = value;
  }
  public resetLatest() {
    this._latest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latestInput() {
    return this._latest;
  }

  // order - computed: false, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string; 
  public get orderBy() {
    return this.getStringAttribute('order_by');
  }
  public set orderBy(value: string) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // backups - computed: false, optional: true, required: false
  private _backups = new DataLinodeDatabaseBackupsBackupsList(this, "backups", false);
  public get backups() {
    return this._backups;
  }
  public putBackups(value: DataLinodeDatabaseBackupsBackups[] | cdktf.IResolvable) {
    this._backups.internalValue = value;
  }
  public resetBackups() {
    this._backups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups.internalValue;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataLinodeDatabaseBackupsFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataLinodeDatabaseBackupsFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      database_id: cdktf.numberToTerraform(this._databaseId),
      database_type: cdktf.stringToTerraform(this._databaseType),
      latest: cdktf.booleanToTerraform(this._latest),
      order: cdktf.stringToTerraform(this._order),
      order_by: cdktf.stringToTerraform(this._orderBy),
      backups: cdktf.listMapper(dataLinodeDatabaseBackupsBackupsToTerraform, true)(this._backups.internalValue),
      filter: cdktf.listMapper(dataLinodeDatabaseBackupsFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      database_id: {
        value: cdktf.numberToHclTerraform(this._databaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latest: {
        value: cdktf.booleanToHclTerraform(this._latest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_by: {
        value: cdktf.stringToHclTerraform(this._orderBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backups: {
        value: cdktf.listMapperHcl(dataLinodeDatabaseBackupsBackupsToHclTerraform, true)(this._backups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLinodeDatabaseBackupsBackupsList",
      },
      filter: {
        value: cdktf.listMapperHcl(dataLinodeDatabaseBackupsFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataLinodeDatabaseBackupsFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
